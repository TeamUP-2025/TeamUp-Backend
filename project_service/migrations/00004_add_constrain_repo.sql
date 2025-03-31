-- +goose Up
-- +goose StatementBegin
ALTER TABLE "repo"
ADD CONSTRAINT unique_user_repo UNIQUE (uid, name);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "repo"
DROP CONSTRAINT unique_user_repo;
-- +goose StatementEnd