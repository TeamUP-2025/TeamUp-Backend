-- name: InsertProject :one
WITH 
repo_id AS (
    SELECT repoId
    FROM repo
    WHERE repo.name = $3
),
project_insert AS (
    INSERT INTO project (title, description, repoId, status, licenseId)
    SELECT $1, $2, repo_id.repoId, $4, license.licenseId
    FROM license, repo_id
    WHERE license.name = $5
    RETURNING projectid
),
teammember_insert AS (
    INSERT INTO teammember (projectId, uId, role)
    SELECT projectid, $6, 'Owner'
    FROM project_insert
)

SELECT projectid FROM project_insert;

-- name: InsertRoadmap :exec
INSERT INTO roadmap (projectid, roadmap, description, status)
SELECT $1, 
    UNNEST($2::varchar[]),
    UNNEST($3::varchar[]),
    UNNEST($4::varchar[]);

-- name: InsertGoal :exec
INSERT INTO goal (projectId, name, description)
SELECT $1, 
    UNNEST($2::varchar[]),
    UNNEST($3::varchar[]);

-- name: GetRepoByUid :many
SELECT * FROM repo WHERE uid = $1;

-- name: UpsertUseAndReturnUidAndName :one
INSERT INTO
    "user" (
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
VALUES (
           $1,
           $2,
           $3,
           $4,
           $5,
           $6,
           $7,
           $8,
           $9,
           $10,
           $11
       ) ON CONFLICT (login) DO
UPDATE
    SET
        token = $5,
    location = $4,
    avatar = $3,
    name = $2,
    bio = $6,
    followers = $7,
    following = $8,
    public_repos = $9,
    total_private_repos = $10,
    html_url = $11 RETURNING uid,
    name;

-- name: GetUserToken :one
SELECT token
FROM "user"
WHERE uId = $1;

-- name: GetUserProfile :one
SELECT *
FROM "user"
WHERE uid = $1
  AND last_updated > NOW() - INTERVAL '1 day';

-- name: GetCachedRepos :many
SELECT *
FROM repo
WHERE uid = $1
  AND last_updated > NOW() - INTERVAL '1 day'
ORDER BY star DESC, updated_at DESC NULLS LAST
    LIMIT 4;

-- The rest of the queries remain the same

-- name: UpdateUserProfile :one
UPDATE "user"
SET name                = $2,
    avatar              = $3,
    location            = $4,
    bio                 = $5,
    followers           = $6,
    following           = $7,
    public_repos        = $8,
    total_private_repos = $9,
    html_url            = $10,
    last_updated        = CURRENT_TIMESTAMP
WHERE uid = $1 RETURNING *;

-- name: UpsertRepo :one
INSERT INTO repo (uid,
                  name,
                  url,
                  description,
                  star,
                  fork,
                  language,
                  updated_at,
                  last_updated)
VALUES ($1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        CURRENT_TIMESTAMP) ON CONFLICT (uid, name) DO
UPDATE
    SET
        description = $4,
    star = $5,
    fork = $6,
    language = $7,
    updated_at = $8,
    last_updated = CURRENT_TIMESTAMP RETURNING *;

-- name: SearchProjectByParameter :many
SELECT p.projectId                                    AS id,
       p.title,
       p.description,
       p.status,
       l.name                                         AS license,
       array_remove(array_agg(DISTINCT t.name), NULL) AS tags
FROM project p
         JOIN license l ON p.licenseId = l.licenseId
         LEFT JOIN "projectTag" pt ON p.projectId = pt.projectId
         LEFT JOIN tag t ON pt.tagId = t.tagId
WHERE 1 = 1
  AND (NULLIF($1::varchar, '') IS NULL OR p.title ILIKE '%' || $1 || '%')
  AND (NULLIF($2::varchar, '') IS NULL OR p.status = $2)
  AND (NULLIF($3::varchar, '') IS NULL OR l.name = $3)
  AND (
    CARDINALITY($4::text[]) = 0
        OR
    p.projectId IN (SELECT pt2.projectId
                    FROM "projectTag" pt2
                             JOIN tag t2 ON pt2.tagId = t2.tagId
                    WHERE t2.name = ANY ($4::text[]))
    )
GROUP BY p.projectId, p.title, p.description, p.status, l.name
ORDER BY p.title;

-- name: GetRepoByLogin :many
SELECT *
FROM "repo"
WHERE uid in (SELECT uid
              FROM "user"
              WHERE "user".login = $1)
ORDER BY star DESC, updated_at DESC NULLS LAST LIMIT 4;

-- name: GetUserInfoByLogin :one
SELECT uid,
       login,
       name,
       avatar,
       location,
       bio,
       followers,
       following,
       public_repos,
       total_private_repos,
       html_url
FROM "user"
WHERE "user".login = $1;

-- name: getProjectByProjectId :one
SELECT p.projectid,
       p.title,
       p.description,
       p.status,
       (SELECT json_agg(
                       json_build_object(
                               'licenseName', l.name, 'description', l.description, 'permission', l.permission,
                               'condition', l.condition, 'limitation', l.limitation
                       )
               )
        FROM license l
        WHERE l.licenseid = p.licenseid)  AS license,
       (SELECT json_agg(
                       json_build_object(
                               'goalName', g.name, 'goalDescription', g.description
                       )
               )
        FROM goal g
        WHERE g.projectid = p.projectid)  AS goal,
       (SELECT json_agg(
                       json_build_object(
                               'roadmap', r.roadmap, 'description', r.description, 'status', r.status
                       )
               )
        FROM roadmap r
        WHERE r.projectid = p.projectid)  AS roadmap,
       (SELECT ARRAY_AGG(t.name)
        FROM tag t
                 JOIN "projectTag" pt ON pt.tagid = t.tagid
        WHERE pt.projectid = p.projectid) AS tag
FROM project p
WHERE p.projectid = $1;


-- name: CheckAdmissionAndMember :one
SELECT CASE
           WHEN EXISTS (SELECT 1 FROM "teammember" t WHERE t.uId = $1 AND t.projectId = $2)
               AND EXISTS (SELECT 1 FROM "application" a WHERE a.uId = $1 AND a.projectId = $2)
               THEN 3 -- Both
           WHEN EXISTS (SELECT 1 FROM "teammember" t WHERE t.uId = $1 AND t.projectId = $2)
               THEN 1 -- Member only
           WHEN EXISTS (SELECT 1 FROM "application" a WHERE a.uId = $1 AND a.projectId = $2)
               THEN 2 -- Applicant only
           ELSE 0 -- Neither
           END AS status_code;

-- name: InsertApplication :exec
INSERT INTO "application" (uid, projectid, coverletter)
VALUES ($1, $2, $3);


-- name: updateProjectTitleDescription :exec
UPDATE "project"
SET title       = $2,
    description = $3
WHERE projectid = $1;

-- name: deleteExistingProjectTag :exec
DELETE
FROM "projectTag"
WHERE projectid = $1;

-- name: insertNewTagIfNotExisting :exec
INSERT INTO "tag" (name)
SELECT new_tags.name
FROM unnest($1::varchar[]) AS new_tags(name)
WHERE NOT EXISTS (SELECT 1
                  FROM "tag" t
                  WHERE t.name = new_tags.name);

-- name: insertNewTagsToProjectTag :exec
INSERT INTO "projectTag" (projectid, tagid)
SELECT $1, t.tagid
FROM "tag" t
WHERE t.name = ANY ($2::varchar[]);

-- name: updateTeamMemberRole :exec
UPDATE teammember
SET role = $3
WHERE uid = $2
  AND projectid = $1;

-- name: deleteApplication :exec
DELETE
FROM application
WHERE uid = $2 AND projectid = $1;

-- name: insertNewTeamMember :exec
INSERT INTO teammember (projectid, uid, role)
VALUES ($1, $2, 'Contributor');

-- name: deleteTeamMember :exec
DELETE
FROM teammember
WHERE uid = $2 AND projectid = $1;

-- name: getProjectRepoByProjectID
SELECT repo.*
FROM repo
         JOIN project ON repo.repoid = project.repoid
WHERE project.projectid = $1;

