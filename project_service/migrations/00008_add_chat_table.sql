-- Filename: YYYYMMDDHHMMSS_add_chat_message_table_with_login.sql

-- +goose Up
-- SQL in this section is executed when the migration is applied.

-- +goose StatementBegin
CREATE TABLE "ChatMessage" (
    "messageId" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "projectId" UUID NOT NULL,
    -- Changed userId to store the user's login (VARCHAR) instead of uid (UUID)
    "login" VARCHAR NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT NOW(),

    -- Foreign key constraint for the project (room) - remains the same
    CONSTRAINT fk_chatmessage_project
        FOREIGN KEY("projectId")
        REFERENCES "project"("projectid")
        ON DELETE CASCADE
        ON UPDATE NO ACTION,

    -- Foreign key constraint for the user (sender) - now references user.login
    CONSTRAINT fk_chatmessage_user_login
        FOREIGN KEY("login")
        REFERENCES "user"("login") -- References the 'login' column in the 'user' table
        ON DELETE RESTRICT -- Prevent deleting a user if they have messages
        ON UPDATE NO ACTION -- Or consider ON UPDATE CASCADE if user logins can change and you want messages updated
);
-- +goose StatementEnd

-- +goose StatementBegin
-- Index updated to use the new userId (login) column along with projectId and createdAt
-- Note: Indexing a VARCHAR column might be less efficient than UUID depending on usage,
-- but indexing projectId and createdAt is still the primary benefit here.
CREATE INDEX idx_chatmessage_project_user_created ON "ChatMessage" ("projectId", "login", "createdAt");
-- +goose StatementEnd

-- +goose StatementBegin
COMMENT ON TABLE "ChatMessage" IS 'Stores chat messages associated with projects (rooms)';
-- +goose StatementEnd

-- +goose StatementBegin
COMMENT ON COLUMN "ChatMessage"."projectId" IS 'Foreign key referencing the project (chat room)';
-- +goose StatementEnd

-- +goose StatementBegin
-- Updated comment for userId
COMMENT ON COLUMN "ChatMessage"."login" IS 'Foreign key referencing the user login who sent the message (user.login)';
-- +goose StatementEnd

-- +goose StatementBegin
COMMENT ON COLUMN "ChatMessage"."content" IS 'The text content of the chat message';
-- +goose StatementEnd

-- +goose StatementBegin
COMMENT ON COLUMN "ChatMessage"."createdAt" IS 'Timestamp when the message was created';
-- +goose StatementEnd


-- +goose Down
-- SQL in this section is executed when the migration is rolled back.

-- +goose StatementBegin
-- Drop the potentially updated index name
DROP INDEX IF EXISTS idx_chatmessage_project_user_created;
-- +goose StatementEnd

-- +goose StatementBegin
DROP TABLE IF EXISTS "ChatMessage";
-- +goose StatementEnd
