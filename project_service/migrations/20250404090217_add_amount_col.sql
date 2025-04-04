-- +goose Up
-- +goose StatementBegin
ALTER TABLE "donation"
ADD COLUMN amount NUMERIC NOT NULL DEFAULT 0;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE "donation"
DROP COLUMN amount;
-- +goose StatementEnd
