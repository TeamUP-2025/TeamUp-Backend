# Project Service

A Go-based service for open source collaboration with authentication and project management features.

## Features
- Authentication: Secure user login and session management, using GitHub OAuth.
- Donation: Functionality to handle donations.
- Project Management: Core features for managing collaborative open source projects.

## Prerequisites

- Go 1.18+
- PostgreSQL
- Goose CLI (`go install github.com/pressly/goose/v3/cmd/goose@latest`)
- sqlc CLI (`go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest`)
- Air (for hot reloading) (`go install github.com/cosmtrek/air@latest`)

## Setup

1. **Install dependencies:**
   ```bash
   go mod tidy
   ```

2. **Configure environment variables:**
   - `GOOSE_DRIVER`: Database type (e.g., postgres)
   - `GOOSE_DBSTRING`: Database connection string for migrations
   - `DATABASE_URL`: Application database connection string
   - `GOOSE_MIGRATION_DIR`: Path to migration files ('./migrations is a default')
   - `FRONT_URL`: Frontend URL for CORS
   - `GithubClientID` & `GithubClientSecret`: For OAuth
   - `JWT_SECRET`: For session tokens
   - `DOMAIN_COOKIE`: For setting root domain for cookie

3. **Database migrations:**
   ```bash
   # Apply migrations
   goose -dir ${GOOSE_MIGRATION_DIR} ${GOOSE_DRIVER} "${GOOSE_DBSTRING}" up
   
   # Check status
   goose -dir ${GOOSE_MIGRATION_DIR} ${GOOSE_DRIVER} "${GOOSE_DBSTRING}" status
   ```

4. **Generate database code:**
   ```bash
   sqlc generate
   ```

5. **Run the application:**
   ```bash
   # Standard run
   go run main.go
   
   # Development with hot reload
   air
   ```

## Development Workflow

- Create migrations: `goose create migration_name sql`
- Write SQL queries in dedicated files with sqlc annotations
- Regenerate code after schema changes: `sqlc generate`
- Use Air for automatic reloading during development