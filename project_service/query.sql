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
ORDER BY star DESC, updated_at DESC NULLS LAST
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
    updated_at,
    last_updated
)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP)
ON CONFLICT (uid, name) 
DO UPDATE SET 
    description = $4,
    star = $5,
    fork = $6,
    language = $7,
    updated_at = $8,
    last_updated = CURRENT_TIMESTAMP
RETURNING *;

-- name: SearchProjectByParameter :many
SELECT 
  p.projectId AS id,
  p.title,
  p.description,
  p.status,
  l.name AS license,
  array_remove(array_agg(DISTINCT t.name), NULL) AS tags
FROM project p
JOIN license l ON p.licenseId = l.licenseId
LEFT JOIN "projectTag" pt ON p.projectId = pt.projectId
LEFT JOIN tag t ON pt.tagId = t.tagId
WHERE 1=1
  AND (NULLIF($1::varchar, '') IS NULL OR p.title ILIKE '%' || $1 || '%')
  AND (NULLIF($2::varchar, '') IS NULL OR p.status = $2)
  AND (NULLIF($3::varchar, '') IS NULL OR l.name = $3)
  AND (
    CARDINALITY($4::text[]) = 0
    OR 
    p.projectId IN (
      SELECT pt2.projectId
      FROM "projectTag" pt2
      JOIN tag t2 ON pt2.tagId = t2.tagId
      WHERE t2.name = ANY($4::text[])
    )
  )
GROUP BY 
  p.projectId, p.title, p.description, p.status, l.name
ORDER BY p.title;

-- name: getProjectByProjectId :one
SELECT *
FROM project
WHERE projectid = $1;


-- -- name: UpdateProjectWithTags :exec
-- -- update project title and description
-- UPDATE "project"
-- SET
--     title = $2,
--     description = $3
-- WHERE projectid = $1;
--
-- -- delete tags that registered to the project
-- DELETE FROM "projectTag"
-- WHERE projectid = $1;
--
-- -- Register new tags to the project
-- INSERT INTO "projectTag" (projectid, tagid)
-- SELECT $1, tag.tagid
-- FROM "tag"
-- WHERE tag.tagname = ANY($4::varchar[])
