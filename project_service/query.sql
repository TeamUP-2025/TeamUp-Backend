-- name: getAllUser :many
SELECT * FROM user;

-- name: UpsertUseAndReturnUidAndName :one
INSERT INTO "user" (email, name, avatar, location, token)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (email)
DO UPDATE SET token = $5, location = $4, avatar = $3, name = $2
RETURNING uid, name;

