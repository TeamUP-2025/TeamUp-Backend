# Chat Service

Real-time communication service powered by Socket.IO for project collaboration.

## Features

- Real-time messaging between project collaborators
- Project-specific chat rooms
- Message history

## Prerequisites

- Node.js
- PostgreSQL database
- TypeScript

## Installation

```bash
# Install dependencies
pnpm install

# set up database
npx drizzle-kit generate
npx drizzle-kit push
```

## Configuration

Set the following environment variables in a `.env` file:

- `JWT_SECRET`: Secret key for JWT authentication
- `DATABASE_URL`: PostgreSQL connection string
- `CORS_ORIGIN`: Allowed origins for CORS (e.g., frontend URL)

## Running the Service

```bash
# Development with hot reload
pnpm start
```

## Development Workflow

- Socket.IO handles real-time communication
- JWT authentication for secure connections
- PostgreSQL database for message persistence
- TypeScript for type safety