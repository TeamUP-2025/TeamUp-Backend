-- +goose Up
-- +goose StatementBegin
ALTER TABLE "repo"
ADD COLUMN language VARCHAR;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "repo"
DROP COLUMN language;
-- +goose StatementEnd