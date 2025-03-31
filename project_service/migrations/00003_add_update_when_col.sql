-- +goose Up
-- +goose StatementBegin
ALTER TABLE "user"
ADD COLUMN last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE "repo"
ADD COLUMN last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "user"
DROP COLUMN last_updated;

ALTER TABLE "repo"
DROP COLUMN last_updated;
-- +goose StatementEnd