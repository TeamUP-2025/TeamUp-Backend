import { Server } from "socket.io";
import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';
import { createServer } from "http";
import express from "express";


// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'test'; // Use the same secret as in your auth system
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: ["http://localhost:3000", "192.168.1.50:3000"], // Adjust according to your frontend URL
        methods: ["GET", "POST"],
        credentials: true,
    }
});

// Middleware to authenticate socket connections
io.use(async (socket, next) => {
    try {
        const cookieHeader = socket.handshake.headers.cookie;
        if (!cookieHeader) {
            return next(new Error('Authentication token required'));
        }
        const cookies = cookie.parse(cookieHeader);
        const decoded = jwt.verify(cookies.token, JWT_SECRET);
    
        socket.data.userId = decoded.userId;
        next();
    } catch (error) {
        next(new Error('Invalid authentication token'));
    }
});

io.on("connection", async (socket) => {
    console.log(`User connected: ${socket.id}`);
    console.log(socket.rooms)
    
    // Handle joining a chat room
    socket.on('joinRoom', async (roomId) => {
        try {
            // Check if user is member of the room in database
            // const membership = await prisma.roomMember.findFirst({
            //     where: {
            //         userId: socket.data.userId,
            //         roomId: roomId
            //     }
            // });

            // if (!membership) {
            //     socket.emit('error', 'You are not a member of this room');
            //     return;
            // }
            console.log(roomId)
            socket.join(roomId);
            socket.join(roomId+1);

            socket.emit('message', `Welcome to room ${roomId}!`);
            socket.broadcast.to(roomId).emit('message', `A user has joined the room`);

        } catch (error) {
            socket.emit('error', 'Failed to join room');
        }
    });

    // Handle chat messages in rooms
    socket.on('chatMessage', async ({ roomId, message }) => {
        try {
            // Verify room membership again for security
            // const membership = await prisma.roomMember.findFirst({
            //     where: {
            //         userId: socket.data.userId,
            //         roomId: roomId
            //     }
            // });

            // if (!membership) {
            //     socket.emit('error', 'You are not a member of this room');
            //     return;
            // }

            // // Store message in database
            // await prisma.message.create({
            //     data: {
            //         content: message,
            //         userId: socket.data.userId,
            //         roomId: roomId
            //     }
            // });
            console.log(message, roomId)
            // Broadcast message to room
            io.to(roomId).emit('message', {
                userId: socket.data.userId,
                message: message,
                timestamp: new Date()
            });

        } catch (error) {
            socket.emit('error', 'Failed to send message');
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

httpServer.listen(3001);
