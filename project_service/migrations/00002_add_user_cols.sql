-- +goose Up
ALTER TABLE "user"
ADD COLUMN bio TEXT,
ADD COLUMN followers INTEGER DEFAULT 0,
ADD COLUMN following INTEGER DEFAULT 0,
ADD COLUMN public_repos INTEGER DEFAULT 0,
ADD COLUMN total_private_repos INTEGER DEFAULT 0,
ADD COLUMN html_url VARCHAR;

-- +goose Down
ALTER TABLE "user"
DROP COLUMN bio,
DROP COLUMN followers,
DROP COLUMN following,
DROP COLUMN public_repos,
DROP COLUMN total_private_repos,
DROP COLUMN html_url;