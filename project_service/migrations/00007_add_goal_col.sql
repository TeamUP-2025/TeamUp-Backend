-- +goose Up
-- +goose StatementBegin
ALTER TABLE "goal"
ADD COLUMN description VARCHAR;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "goal"
DROP COLUMN description;
-- +goose StatementEnd
