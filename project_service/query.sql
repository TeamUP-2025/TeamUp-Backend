--- name: getAllUser :many
-- SELECT * FROM user;

-- name: UpsertUseAndReturnUidAndName :one
INSERT INTO "user" (
    login, 
    name, 
    avatar, 
    location, 
    token,
    bio,
    followers,
    following,
    public_repos,
    total_private_repos,
    html_url
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
ON CONFLICT (login)
DO UPDATE SET 
    token = $5,
    location = $4,
    avatar = $3,
    name = $2,
    bio = $6,
    followers = $7,
    following = $8,
    public_repos = $9,
    total_private_repos = $10,
    html_url = $11
RETURNING uid, name;

-- name: GetUserToken :one
SELECT token
FROM "user"
WHERE uId = $1;

-- name: GetUserProfile :one
SELECT *
FROM "user"
WHERE uid = $1 AND last_updated > NOW() - INTERVAL '1 day';

-- name: GetCachedRepos :many
SELECT *
FROM repo
WHERE uid = $1 AND last_updated > NOW() - INTERVAL '1 day'
ORDER BY star DESC
LIMIT 4;

-- The rest of the queries remain the same

-- name: UpdateUserProfile :one
UPDATE "user"
SET 
    name = $2,
    avatar = $3,
    location = $4,
    bio = $5,
    followers = $6,
    following = $7,
    public_repos = $8,
    total_private_repos = $9,
    html_url = $10,
    last_updated = CURRENT_TIMESTAMP
WHERE uid = $1
RETURNING *;

-- name: UpsertRepo :one
INSERT INTO repo (
    uid, 
    name, 
    url, 
    description, 
    star, 
    fork,
    language,
    last_updated
)
VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)
ON CONFLICT (uid, name) 
DO UPDATE SET 
    description = $4,
    star = $5,
    fork = $6,
    language = $7,
    last_updated = CURRENT_TIMESTAMP
RETURNING *;