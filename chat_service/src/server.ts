import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";
import { createServer } from "http";
import express from "express";
import { EventEmitter } from "events"; // Import EventEmitter
// Assuming you have Prisma initialized elsewhere
// import { prisma } from './path/to/prisma/client';

// --- Event Emitter Setup ---
const serverEventEmitter = new EventEmitter();

const JWT_SECRET = process.env.JWT_SECRET || "test";
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "192.168.1.50:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// --- Database Saving Listener ---
// This listener handles the actual database interaction
serverEventEmitter.on(
  "saveMessageToDb",
  async (payload: {
    roomId: string;
    userId: string;
    message: string;
    timestamp: Date;
  }) => {
    const { roomId, userId, message, timestamp } = payload;
    console.log(
      `[DB Listener] Received event to save message for room ${roomId}, user ${userId}`,
    );
    try {
      // --- DATABASE SAVING LOGIC ---
      // Uncomment and adapt this when your Prisma (or other DB client) is set up
      /*
        console.log(`[DB Listener] Saving message to DB: Room=${roomId}, User=${userId}, Msg=${message}`);
        const savedMessage = await prisma.message.create({
            data: {
                content: message,
                userId: userId, // Make sure this matches your schema's expected user identifier
                roomId: roomId,
                timestamp: timestamp // Store the timestamp
            }
        });
        console.log(`[DB Listener] Message saved with ID: ${savedMessage.id}`);
        */
      // Simulate async DB operation
      await new Promise((resolve) => setTimeout(resolve, 50)); // Simulate DB delay
      console.log(
        `[DB Listener] Successfully processed save for room ${roomId}, user ${userId}`,
      );
      // --- END DATABASE SAVING LOGIC ---
    } catch (error) {
      // Log the error thoroughly
      console.error(
        `[DB Listener] Failed to save message for room ${roomId}, user ${userId}:`,
        error,
      );
      // Optional: Implement retry logic or send to a dead-letter queue here
    }
  },
);

// --- Socket.IO Middleware (Authentication) ---
io.use(async (socket, next) => {
  // ... (keep your existing authentication middleware logic)
  try {
    const cookieHeader = socket.handshake.headers.cookie;
    if (!cookieHeader) {
      console.warn("Socket connected without authentication cookie.");
      return next();
    }
    const cookies = cookie.parse(cookieHeader);
    if (!cookies.token) {
      console.warn("Authentication token cookie not found.");
      return next();
    }
    const decoded = jwt.verify(cookies.token, JWT_SECRET) as { userId: string };
    socket.data.authenticatedUserId = decoded.userId;
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    next();
  }
});

// --- Socket.IO Connection Logic ---
io.on("connection", async (socket) => {
  console.log(
    `User connected: ${socket.id}, Auth User ID: ${socket.data.authenticatedUserId}`,
  );

  // Handle joining a chat room
  socket.on("joinRoom", async (roomId, uid) => {
    // ... (keep your existing joinRoom logic)
    socket.data.userId = uid; // Using client-provided uid

    try {
      socket.join(roomId);
      console.log(`Socket ${socket.id} (User ${uid}) joined room ${roomId}`);
      socket.broadcast
        .to(roomId)
        .emit("message", {
          userId: "system",
          message: `User ${uid} has joined the room`,
          timestamp: new Date(),
        });
    } catch (error) {
      console.error(`Error joining room ${roomId} for user ${uid}:`, error);
      socket.emit("error", "Failed to join room");
    }
  });

  // Handle chat messages in rooms
  socket.on("chatMessage", async ({ roomId, message }) => {
    // Basic validation
    if (!socket.data.userId) {
      console.error(
        `User ${socket.id} tried to send message without userId in room ${roomId}`,
      );
      return socket.emit(
        "error",
        "Cannot send message: User identity not set.",
      );
    }
    if (!socket.rooms.has(roomId)) {
      console.error(
        `User ${socket.id} (User ${socket.data.userId}) tried to send message to room ${roomId} they haven't joined.`,
      );
      return socket.emit(
        "error",
        "Cannot send message: You are not in this room.",
      );
    }

    const userId = socket.data.userId;
    const timestamp = new Date();

    // 1. Prepare the message payload
    const messagePayload = {
      userId: userId,
      message: message,
      timestamp: timestamp,
      // Include roomId in the internal event payload, but not necessarily in the client-facing one
      // unless your client needs it directly on the message object.
    };

    // 2. Emit the internal event for database saving (asynchronous)
    serverEventEmitter.emit("saveMessageToDb", {
      ...messagePayload,
      roomId: roomId, // Ensure roomId is passed to the listener
    });
    console.log(
      `[chatMessage] Emitted 'saveMessageToDb' event for room ${roomId}, user ${userId}`,
    );

    // 3. Broadcast the message to clients immediately
    // We use messagePayload which doesn't necessarily need the roomId inside it for the client
    io.to(roomId).emit("message", messagePayload);
    console.log(
      `[chatMessage] Broadcasted message to room ${roomId}: User=${userId}, Msg=${message}`,
    );

    // Note: Error handling for the *emit* itself is less common.
    // The main error handling happens in the listener.
  });

  // Handle disconnection
  socket.on("disconnect", (reason) => {
    // ... (keep your existing disconnect logic)
    console.log(
      `User disconnected: ${socket.id}, User ID: ${socket.data.userId}, Reason: ${reason}`,
    );
    socket.rooms.forEach((roomId) => {
      if (roomId !== socket.id && socket.data.userId) {
        io.to(roomId).emit("message", {
          userId: "system",
          message: `User ${socket.data.userId} has left the room`,
          timestamp: new Date(),
        });
      }
    });
  });

  // ... (keep debug listeners if needed)
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server listening on port ${PORT}`);
});
