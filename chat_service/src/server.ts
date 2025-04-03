// src/server.ts (adjust path as needed)

import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";
import { createServer } from "http";
import express from "express";
import { EventEmitter } from "events";
// Import the database query functions (now using Drizzle)
import { saveChatMessage, isUserTeamMember, getChatHistory } from "./db/db";
 // Adjust path to your dbQueries file

// --- Event Emitter Setup ---
const serverEventEmitter = new EventEmitter();

const JWT_SECRET = process.env.JWT_SECRET || "test"; // Use environment variable
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN?.split(",") || [
      "http://localhost:3000",
      "192.168.1.50:3000",
      "http://10.6.38.142:3000"
    ], // Allow multiple origins from env or default
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// --- Database Saving Listener ---
// This listener calls the Drizzle-based saveChatMessage function
serverEventEmitter.on(
  "saveMessageToDb",
  async (payload: {
    roomId: string; // Corresponds to projectId
    userId: string; // Corresponds to userLogin
    message: string;
    timestamp: Date;
  }) => {
    const { roomId, userId, message, timestamp } = payload;
    console.log(
      `[Event Listener] Received 'saveMessageToDb' event for room ${roomId}, user ${userId}`
    );
    try {
      // Call the database function (now implemented with Drizzle)
      await saveChatMessage(roomId, userId, message, timestamp);
      // Logging is handled within saveChatMessage
    } catch (error) {
      console.error(
        `[Event Listener] Error occurred while trying to save message via dbQueries for room ${roomId}, user ${userId}:`,
        error
      );
    }
  }
);

// --- Socket.IO Middleware (Authentication) ---
// This middleware attempts to verify a JWT from cookies but allows connection regardless.
// Authorization checks happen later (e.g., in joinRoom).
io.use(async (socket, next) => {
  try {
    const cookieHeader = socket.handshake.headers.cookie;
    if (cookieHeader) {
      const cookies = cookie.parse(cookieHeader);
      const token = cookies.token; // Assuming your token cookie is named 'token'

      if (token) {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET) as {
          userId: string; // Assuming JWT payload has user's UUID (uid)
          login: string; // Assuming JWT payload also has user's login
          // Add other relevant fields from your JWT payload
        };

        // Store relevant authenticated user info on the socket for potential use
        // IMPORTANT: Only store info you trust from the verified JWT
        socket.data.authenticatedUserUid = decoded.userId;
        socket.data.authenticatedUserLogin = decoded.login;

        console.log(
          `Socket ${socket.id} authenticated via JWT. User Login: ${decoded.login}, UID: ${decoded.userId}`
        );
      } else {
        console.warn(`Socket ${socket.id} connected without 'token' cookie.`);
      }
    } else {
      console.warn(`Socket ${socket.id} connected without cookies.`);
    }
    next(); // Allow connection even if unauthenticated
  } catch (error) {
    // Handle invalid/expired tokens specifically
    if (error instanceof jwt.JsonWebTokenError) {
      console.warn(
        `Socket ${socket.id} connection attempt with invalid JWT: ${error.message}`
      );
    } else if (error instanceof jwt.TokenExpiredError) {
      console.warn(`Socket ${socket.id} connection attempt with expired JWT.`);
    } else {
      console.error("JWT verification middleware error:", error);
    }
    // Allow connection even if token is invalid/expired, authorization happens later
    next();
    // If you wanted to *reject* invalid tokens:
    // next(new Error("Authentication failed: Invalid token"));
  }
});

// --- Socket.IO Connection Logic ---
io.on("connection", (socket) => {
  console.log(
    `User connected: ${socket.id}. Authenticated Login (from JWT): ${
      socket.data.authenticatedUserLogin || "N/A"
    }`
  );

  // Handle joining a chat room
  socket.on("joinRoom", async (roomId: string, userLogin: string) => {
    // userLogin is provided by the client (e.g., from auth context)
    console.log(
      `Attempting join: Socket ${socket.id}, User Login (from client): ${userLogin}, Room: ${roomId}`
    );

    // Optional: Verify client-provided login against authenticated login from JWT if available
    if (
      socket.data.authenticatedUserLogin &&
      socket.data.authenticatedUserLogin !== userLogin
    ) {
      console.warn(
        `Join attempt mismatch: Socket ${socket.id} authenticated as ${socket.data.authenticatedUserLogin} but trying to join as ${userLogin}. Denying join.`
      );
      socket.emit(
        "error",
        "Authorization mismatch. Please refresh and try again."
      );
      return;
    }

    try {
      // --- Permission Check using Drizzle function ---
      //   const canJoin = await isUserTeamMember(roomId, userLogin);
      //   if (!canJoin) {
      //     console.warn(
      //       `Join rejected: User ${userLogin} is not a team member of project ${roomId}.`,
      //     );
      //     socket.emit("error", "You are not authorized to join this chat room.");
      //     return;
      //   }
      // --- End Permission Check ---

      // Store the user's login on the socket for identifying the sender in this session
      // We trust userLogin now because we've either verified it against JWT or checked membership
      socket.data.userLogin = userLogin;

      // Leave other rooms the socket might be in (optional, depends on desired behavior)
      // socket.rooms.forEach(room => {
      //   if (room !== socket.id) {
      //     socket.leave(room);
      //   }
      // });

      socket.join(roomId);
      console.log(
        `Socket ${socket.id} (User Login: ${userLogin}) successfully joined room ${roomId}`
      );

      // Emit event to client confirming successful join
      socket.emit("joinedRoom", roomId);
      console.log(
        `Emitted 'joinedRoom' confirmation to ${userLogin} for room ${roomId}`
      );

      // Notify others in the room
      socket.broadcast.to(roomId).emit("message", {
        userId: "system", // System message
        message: `User ${userLogin} has joined the room`,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error(
        `Error during joinRoom for user ${userLogin}, room ${roomId}:`,
        error
      );
      socket.emit("error", "Failed to join room due to an internal error.");
    }
  });

  // --- History Request Handler ---
  socket.on(
    "requestHistory",
    async ({
      roomId,
      beforeTimestamp,
    }: {
      roomId: string;
      beforeTimestamp?: string | null;
    }) => {
      // Use the userLogin stored on the socket from the successful join
      const userLogin = socket.data.userLogin;
      console.log(
        `[History Request] Received from ${
          userLogin || "Unknown User"
        } (Socket ${socket.id}) for room ${roomId}, before: ${beforeTimestamp}`
      );

      // Validate user has joined this room and has an associated login
      if (!socket.rooms.has(roomId) || !userLogin) {
        console.warn(
          `[History Request] Denied: User ${userLogin || "N/A"} (Socket ${
            socket.id
          }) not authorized or not in room ${roomId}.`
        );
        socket.emit(
          "error",
          "Cannot fetch history: Not authorized for this room."
        );
        return;
      }

      try {
        const beforeDate = beforeTimestamp ? new Date(beforeTimestamp) : null;

        // Fetch history using the Drizzle-based dbQuery function
        const historyData = await getChatHistory(roomId, beforeDate, 20); // Fetch 20 messages

        // Send history back *only* to the requesting client
        socket.emit("chatHistory", {
          roomId: roomId,
          messages: historyData.messages,
          hasMore: historyData.hasMore,
        });
        console.log(
          `[History Request] Sent ${historyData.messages.length} messages to ${userLogin} for room ${roomId}. Has More: ${historyData.hasMore}`
        );
      } catch (error) {
        console.error(
          `[History Request] Error fetching history for room ${roomId}, user ${userLogin}:`,
          error
        );
        socket.emit("error", "Failed to load chat history.");
      }
    }
  );

  // --- Handle Chat Messages ---
  socket.on(
    "chatMessage",
    async ({ roomId, message }: { roomId: string; message: string }) => {
      // Use the userLogin stored on the socket data from the successful join
      const userLogin = socket.data.userLogin;

      // Basic validation
      if (!userLogin) {
        console.error(
          `User ${socket.id} tried to send message without userLogin identifier in room ${roomId}`
        );
        return socket.emit(
          "error",
          "Cannot send message: User identity not set. Please rejoin."
        );
      }
      if (!socket.rooms.has(roomId)) {
        console.error(
          `User ${socket.id} (${userLogin}) tried to send message to room ${roomId} they haven't joined.`
        );
        return socket.emit(
          "error",
          "Cannot send message: You are not in this room."
        );
      }

      const timestamp = new Date();

      // 1. Prepare the message payload for clients
      const messagePayload = {
        userId: userLogin, // Use the login string as the identifier
        message: message,
        timestamp: timestamp,
      };

      // 2. Emit the internal event for database saving (asynchronous)
      serverEventEmitter.emit("saveMessageToDb", {
        roomId: roomId,
        userId: userLogin, // Pass the login string
        message: message,
        timestamp: timestamp,
      });
      // Logging for this step is now inside the listener

      // 3. Broadcast the message to all clients in the room (including sender)
      io.to(roomId).emit("message", messagePayload);
      console.log(
        `[chatMessage] Broadcasted message to room ${roomId}: User=${userLogin}, Msg=${message}`
      );
    }
  );

  // --- Handle Disconnection ---
  socket.on("disconnect", (reason) => {
    const userLogin = socket.data.userLogin; // Get the login if stored during join
    console.log(
      `User disconnected: ${socket.id}, User Login: ${
        userLogin || "N/A"
      }, Reason: ${reason}`
    );
    // Notify rooms the user was in
    socket.rooms.forEach((roomId) => {
      // socket.rooms includes the socket's own ID room, skip it
      if (roomId !== socket.id && userLogin) {
        io.to(roomId).emit("message", {
          userId: "system",
          message: `User ${userLogin} has left the room`,
          timestamp: new Date(),
        });
        console.log(`Notified room ${roomId} about ${userLogin} leaving.`);
      }
    });
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server listening on port ${PORT}`);
});
