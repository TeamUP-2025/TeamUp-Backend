--- name: getAllUser :many
-- SELECT * FROM user;

-- name: UpsertUseAndReturnUidAndName :one
INSERT INTO "user" (login, name, avatar, location, token)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (login)
DO UPDATE SET token = $5, location = $4, avatar = $3, name = $2
RETURNING uid, name;

-- name: GetUserToken :one
SELECT token
FROM "user"
WHERE uId = $1;