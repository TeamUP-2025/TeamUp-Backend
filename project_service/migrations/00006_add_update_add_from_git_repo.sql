-- +goose Up
-- +goose StatementBegin
ALTER TABLE "repo"
ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "repo"
DROP COLUMN updated_at;
-- +goose StatementEnd