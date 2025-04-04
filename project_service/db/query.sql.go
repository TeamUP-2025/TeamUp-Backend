// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: query.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const checkAdmissionAndMember = `-- name: CheckAdmissionAndMember :one
SELECT CASE
           WHEN EXISTS (SELECT 1 FROM "teammember" t WHERE t.uId = $1 AND t.projectId = $2)
               AND EXISTS (SELECT 1 FROM "application" a WHERE a.uId = $1 AND a.projectId = $2)
               THEN 3 -- Both
           WHEN EXISTS (SELECT 1 FROM "teammember" t WHERE t.uId = $1 AND t.projectId = $2)
               THEN 1 -- Member only
           WHEN EXISTS (SELECT 1 FROM "application" a WHERE a.uId = $1 AND a.projectId = $2)
               THEN 2 -- Applicant only
           ELSE 0 -- Neither
           END AS status_code
`

type CheckAdmissionAndMemberParams struct {
	Uid       pgtype.UUID
	Projectid pgtype.UUID
}

func (q *Queries) CheckAdmissionAndMember(ctx context.Context, arg CheckAdmissionAndMemberParams) (int32, error) {
	row := q.db.QueryRow(ctx, checkAdmissionAndMember, arg.Uid, arg.Projectid)
	var status_code int32
	err := row.Scan(&status_code)
	return status_code, err
}

const getCachedRepos = `-- name: GetCachedRepos :many
SELECT repoid, uid, name, url, description, star, fork, last_updated, language, updated_at
FROM repo
WHERE uid = $1
  AND last_updated > NOW() - INTERVAL '1 day'
ORDER BY star DESC, updated_at DESC NULLS LAST
    LIMIT 4
`

func (q *Queries) GetCachedRepos(ctx context.Context, uid pgtype.UUID) ([]Repo, error) {
	rows, err := q.db.Query(ctx, getCachedRepos, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Repo
	for rows.Next() {
		var i Repo
		if err := rows.Scan(
			&i.Repoid,
			&i.Uid,
			&i.Name,
			&i.Url,
			&i.Description,
			&i.Star,
			&i.Fork,
			&i.LastUpdated,
			&i.Language,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getProjectByMemberStatus = `-- name: GetProjectByMemberStatus :many
SELECT p.projectid, p.title, p.description, p.status, p.repoId, p.licenseId, tm.role
FROM project p
JOIN teammember tm ON p.projectid = tm.projectid
WHERE tm.uid = $1
`

type GetProjectByMemberStatusRow struct {
	Projectid   pgtype.UUID
	Title       string
	Description string
	Status      *string
	Repoid      pgtype.UUID
	Licenseid   pgtype.UUID
	Role        string
}

func (q *Queries) GetProjectByMemberStatus(ctx context.Context, uid pgtype.UUID) ([]GetProjectByMemberStatusRow, error) {
	rows, err := q.db.Query(ctx, getProjectByMemberStatus, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetProjectByMemberStatusRow
	for rows.Next() {
		var i GetProjectByMemberStatusRow
		if err := rows.Scan(
			&i.Projectid,
			&i.Title,
			&i.Description,
			&i.Status,
			&i.Repoid,
			&i.Licenseid,
			&i.Role,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRepoByLogin = `-- name: GetRepoByLogin :many
SELECT repoid, uid, name, url, description, star, fork, last_updated, language, updated_at
FROM "repo"
WHERE uid in (SELECT uid
              FROM "user"
              WHERE "user".login = $1)
ORDER BY star DESC, updated_at DESC NULLS LAST LIMIT 4
`

func (q *Queries) GetRepoByLogin(ctx context.Context, login string) ([]Repo, error) {
	rows, err := q.db.Query(ctx, getRepoByLogin, login)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Repo
	for rows.Next() {
		var i Repo
		if err := rows.Scan(
			&i.Repoid,
			&i.Uid,
			&i.Name,
			&i.Url,
			&i.Description,
			&i.Star,
			&i.Fork,
			&i.LastUpdated,
			&i.Language,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getRepoByUid = `-- name: GetRepoByUid :many
SELECT repoid, uid, name, url, description, star, fork, last_updated, language, updated_at FROM repo WHERE uid = $1
`

func (q *Queries) GetRepoByUid(ctx context.Context, uid pgtype.UUID) ([]Repo, error) {
	rows, err := q.db.Query(ctx, getRepoByUid, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Repo
	for rows.Next() {
		var i Repo
		if err := rows.Scan(
			&i.Repoid,
			&i.Uid,
			&i.Name,
			&i.Url,
			&i.Description,
			&i.Star,
			&i.Fork,
			&i.LastUpdated,
			&i.Language,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getUserInfoByLogin = `-- name: GetUserInfoByLogin :one
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
WHERE "user".login = $1
`

type GetUserInfoByLoginRow struct {
	Uid               pgtype.UUID
	Login             string
	Name              string
	Avatar            *string
	Location          *string
	Bio               *string
	Followers         *int32
	Following         *int32
	PublicRepos       *int32
	TotalPrivateRepos *int32
	HtmlUrl           *string
}

func (q *Queries) GetUserInfoByLogin(ctx context.Context, login string) (GetUserInfoByLoginRow, error) {
	row := q.db.QueryRow(ctx, getUserInfoByLogin, login)
	var i GetUserInfoByLoginRow
	err := row.Scan(
		&i.Uid,
		&i.Login,
		&i.Name,
		&i.Avatar,
		&i.Location,
		&i.Bio,
		&i.Followers,
		&i.Following,
		&i.PublicRepos,
		&i.TotalPrivateRepos,
		&i.HtmlUrl,
	)
	return i, err
}

const getUserProfile = `-- name: GetUserProfile :one
SELECT uid, login, name, avatar, location, token, bio, followers, following, public_repos, total_private_repos, html_url, last_updated
FROM "user"
WHERE uid = $1
  AND last_updated > NOW() - INTERVAL '1 day'
`

func (q *Queries) GetUserProfile(ctx context.Context, uid pgtype.UUID) (User, error) {
	row := q.db.QueryRow(ctx, getUserProfile, uid)
	var i User
	err := row.Scan(
		&i.Uid,
		&i.Login,
		&i.Name,
		&i.Avatar,
		&i.Location,
		&i.Token,
		&i.Bio,
		&i.Followers,
		&i.Following,
		&i.PublicRepos,
		&i.TotalPrivateRepos,
		&i.HtmlUrl,
		&i.LastUpdated,
	)
	return i, err
}

const getUserToken = `-- name: GetUserToken :one
SELECT token
FROM "user"
WHERE uId = $1
`

func (q *Queries) GetUserToken(ctx context.Context, uid pgtype.UUID) (string, error) {
	row := q.db.QueryRow(ctx, getUserToken, uid)
	var token string
	err := row.Scan(&token)
	return token, err
}

const insertApplication = `-- name: InsertApplication :exec
INSERT INTO "application" (uid, projectid, coverletter)
VALUES ($1, $2, $3)
`

type InsertApplicationParams struct {
	Uid         pgtype.UUID
	Projectid   pgtype.UUID
	Coverletter *string
}

func (q *Queries) InsertApplication(ctx context.Context, arg InsertApplicationParams) error {
	_, err := q.db.Exec(ctx, insertApplication, arg.Uid, arg.Projectid, arg.Coverletter)
	return err
}

const insertGoal = `-- name: InsertGoal :exec
INSERT INTO goal (projectId, name, description)
SELECT $1,
    UNNEST($2::varchar[]),
    UNNEST($3::varchar[])
`

type InsertGoalParams struct {
	Projectid pgtype.UUID
	Column2   []string
	Column3   []string
}

func (q *Queries) InsertGoal(ctx context.Context, arg InsertGoalParams) error {
	_, err := q.db.Exec(ctx, insertGoal, arg.Projectid, arg.Column2, arg.Column3)
	return err
}

const insertProject = `-- name: InsertProject :one
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

SELECT projectid FROM project_insert
`

type InsertProjectParams struct {
	Title       string
	Description string
	Name        string
	Status      *string
	Name_2      string
	Uid         pgtype.UUID
}

func (q *Queries) InsertProject(ctx context.Context, arg InsertProjectParams) (pgtype.UUID, error) {
	row := q.db.QueryRow(ctx, insertProject,
		arg.Title,
		arg.Description,
		arg.Name,
		arg.Status,
		arg.Name_2,
		arg.Uid,
	)
	var projectid pgtype.UUID
	err := row.Scan(&projectid)
	return projectid, err
}

const insertRoadmap = `-- name: InsertRoadmap :exec
INSERT INTO roadmap (projectid, roadmap, description, status)
SELECT $1,
    UNNEST($2::varchar[]),
    UNNEST($3::varchar[]),
    UNNEST($4::varchar[])
`

type InsertRoadmapParams struct {
	Projectid pgtype.UUID
	Column2   []string
	Column3   []string
	Column4   []string
}

func (q *Queries) InsertRoadmap(ctx context.Context, arg InsertRoadmapParams) error {
	_, err := q.db.Exec(ctx, insertRoadmap,
		arg.Projectid,
		arg.Column2,
		arg.Column3,
		arg.Column4,
	)
	return err
}

const searchProjectByParameter = `-- name: SearchProjectByParameter :many
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
ORDER BY p.title
`

type SearchProjectByParameterParams struct {
	Column1 string
	Column2 string
	Column3 string
	Column4 []string
}

type SearchProjectByParameterRow struct {
	ID          pgtype.UUID
	Title       string
	Description string
	Status      *string
	License     string
	Tags        interface{}
}

func (q *Queries) SearchProjectByParameter(ctx context.Context, arg SearchProjectByParameterParams) ([]SearchProjectByParameterRow, error) {
	rows, err := q.db.Query(ctx, searchProjectByParameter,
		arg.Column1,
		arg.Column2,
		arg.Column3,
		arg.Column4,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []SearchProjectByParameterRow
	for rows.Next() {
		var i SearchProjectByParameterRow
		if err := rows.Scan(
			&i.ID,
			&i.Title,
			&i.Description,
			&i.Status,
			&i.License,
			&i.Tags,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateUserProfile = `-- name: UpdateUserProfile :one

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
WHERE uid = $1 RETURNING uid, login, name, avatar, location, token, bio, followers, following, public_repos, total_private_repos, html_url, last_updated
`

type UpdateUserProfileParams struct {
	Uid               pgtype.UUID
	Name              string
	Avatar            *string
	Location          *string
	Bio               *string
	Followers         *int32
	Following         *int32
	PublicRepos       *int32
	TotalPrivateRepos *int32
	HtmlUrl           *string
}

// The rest of the queries remain the same
func (q *Queries) UpdateUserProfile(ctx context.Context, arg UpdateUserProfileParams) (User, error) {
	row := q.db.QueryRow(ctx, updateUserProfile,
		arg.Uid,
		arg.Name,
		arg.Avatar,
		arg.Location,
		arg.Bio,
		arg.Followers,
		arg.Following,
		arg.PublicRepos,
		arg.TotalPrivateRepos,
		arg.HtmlUrl,
	)
	var i User
	err := row.Scan(
		&i.Uid,
		&i.Login,
		&i.Name,
		&i.Avatar,
		&i.Location,
		&i.Token,
		&i.Bio,
		&i.Followers,
		&i.Following,
		&i.PublicRepos,
		&i.TotalPrivateRepos,
		&i.HtmlUrl,
		&i.LastUpdated,
	)
	return i, err
}

const upsertRepo = `-- name: UpsertRepo :one
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
    last_updated = CURRENT_TIMESTAMP RETURNING repoid, uid, name, url, description, star, fork, last_updated, language, updated_at
`

type UpsertRepoParams struct {
	Uid         pgtype.UUID
	Name        string
	Url         string
	Description *string
	Star        *int32
	Fork        *int32
	Language    *string
	UpdatedAt   pgtype.Timestamptz
}

func (q *Queries) UpsertRepo(ctx context.Context, arg UpsertRepoParams) (Repo, error) {
	row := q.db.QueryRow(ctx, upsertRepo,
		arg.Uid,
		arg.Name,
		arg.Url,
		arg.Description,
		arg.Star,
		arg.Fork,
		arg.Language,
		arg.UpdatedAt,
	)
	var i Repo
	err := row.Scan(
		&i.Repoid,
		&i.Uid,
		&i.Name,
		&i.Url,
		&i.Description,
		&i.Star,
		&i.Fork,
		&i.LastUpdated,
		&i.Language,
		&i.UpdatedAt,
	)
	return i, err
}

const upsertUseAndReturnUidAndName = `-- name: UpsertUseAndReturnUidAndName :one
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
    name
`

type UpsertUseAndReturnUidAndNameParams struct {
	Login             string
	Name              string
	Avatar            *string
	Location          *string
	Token             string
	Bio               *string
	Followers         *int32
	Following         *int32
	PublicRepos       *int32
	TotalPrivateRepos *int32
	HtmlUrl           *string
}

type UpsertUseAndReturnUidAndNameRow struct {
	Uid  pgtype.UUID
	Name string
}

func (q *Queries) UpsertUseAndReturnUidAndName(ctx context.Context, arg UpsertUseAndReturnUidAndNameParams) (UpsertUseAndReturnUidAndNameRow, error) {
	row := q.db.QueryRow(ctx, upsertUseAndReturnUidAndName,
		arg.Login,
		arg.Name,
		arg.Avatar,
		arg.Location,
		arg.Token,
		arg.Bio,
		arg.Followers,
		arg.Following,
		arg.PublicRepos,
		arg.TotalPrivateRepos,
		arg.HtmlUrl,
	)
	var i UpsertUseAndReturnUidAndNameRow
	err := row.Scan(&i.Uid, &i.Name)
	return i, err
}

const addRoadmap = `-- name: addRoadmap :exec
INSERT INTO roadmap (projectid, roadmap, description, status)
VALUES ($1, $2, $3, 'Planned')
`

type addRoadmapParams struct {
	Projectid   pgtype.UUID
	Roadmap     string
	Description string
}

func (q *Queries) addRoadmap(ctx context.Context, arg addRoadmapParams) error {
	_, err := q.db.Exec(ctx, addRoadmap, arg.Projectid, arg.Roadmap, arg.Description)
	return err
}

const deleteApplication = `-- name: deleteApplication :exec
DELETE
FROM application
WHERE uid = $2 AND projectid = $1
`

type deleteApplicationParams struct {
	Projectid pgtype.UUID
	Uid       pgtype.UUID
}

func (q *Queries) deleteApplication(ctx context.Context, arg deleteApplicationParams) error {
	_, err := q.db.Exec(ctx, deleteApplication, arg.Projectid, arg.Uid)
	return err
}

const deleteExistingProjectTag = `-- name: deleteExistingProjectTag :exec
DELETE
FROM "projectTag"
WHERE projectid = $1
`

func (q *Queries) deleteExistingProjectTag(ctx context.Context, projectid pgtype.UUID) error {
	_, err := q.db.Exec(ctx, deleteExistingProjectTag, projectid)
	return err
}

const deleteTeamMember = `-- name: deleteTeamMember :exec
DELETE
FROM teammember
WHERE uid = $2 AND projectid = $1
`

type deleteTeamMemberParams struct {
	Projectid pgtype.UUID
	Uid       pgtype.UUID
}

func (q *Queries) deleteTeamMember(ctx context.Context, arg deleteTeamMemberParams) error {
	_, err := q.db.Exec(ctx, deleteTeamMember, arg.Projectid, arg.Uid)
	return err
}

const getProjectApplicationByProjectID = `-- name: getProjectApplicationByProjectID :many
SELECT
    "user".name,
    "user".location,
    "user".avatar,
    string_agg(tag.name, ', ') AS tags,
    application.coverletter,
    "user".uid
FROM application
         JOIN "user" ON "user".uid = application.uid
         LEFT JOIN "userTag" ON "user".uid = "userTag".uid
         LEFT JOIN "tag" ON "tag".tagid = "userTag".tagid
WHERE application.projectid = $1
GROUP BY application.appid, "user".uid
`

type getProjectApplicationByProjectIDRow struct {
	Name        string
	Location    *string
	Avatar      *string
	Tags        []byte
	Coverletter *string
	Uid         pgtype.UUID
}

func (q *Queries) getProjectApplicationByProjectID(ctx context.Context, projectid pgtype.UUID) ([]getProjectApplicationByProjectIDRow, error) {
	rows, err := q.db.Query(ctx, getProjectApplicationByProjectID, projectid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []getProjectApplicationByProjectIDRow
	for rows.Next() {
		var i getProjectApplicationByProjectIDRow
		if err := rows.Scan(
			&i.Name,
			&i.Location,
			&i.Avatar,
			&i.Tags,
			&i.Coverletter,
			&i.Uid,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getProjectByProjectId = `-- name: getProjectByProjectId :one
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
WHERE p.projectid = $1
`

type getProjectByProjectIdRow struct {
	Projectid   pgtype.UUID
	Title       string
	Description string
	Status      *string
	License     []byte
	Goal        []byte
	Roadmap     []byte
	Tag         interface{}
}

func (q *Queries) getProjectByProjectId(ctx context.Context, projectid pgtype.UUID) (getProjectByProjectIdRow, error) {
	row := q.db.QueryRow(ctx, getProjectByProjectId, projectid)
	var i getProjectByProjectIdRow
	err := row.Scan(
		&i.Projectid,
		&i.Title,
		&i.Description,
		&i.Status,
		&i.License,
		&i.Goal,
		&i.Roadmap,
		&i.Tag,
	)
	return i, err
}

const getProjectDonationByProjectID = `-- name: getProjectDonationByProjectID :many
SELECT donation.created_at, donation.amount,
       "user".name, "user".avatar
FROM donation
         JOIN "user" ON "user".uid = donation.uid
         JOIN project ON project.projectid = donation.projectid
WHERE donation.projectid = $1
`

type getProjectDonationByProjectIDRow struct {
	CreatedAt pgtype.Timestamptz
	Amount    pgtype.Numeric
	Name      string
	Avatar    *string
}

func (q *Queries) getProjectDonationByProjectID(ctx context.Context, projectid pgtype.UUID) ([]getProjectDonationByProjectIDRow, error) {
	rows, err := q.db.Query(ctx, getProjectDonationByProjectID, projectid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []getProjectDonationByProjectIDRow
	for rows.Next() {
		var i getProjectDonationByProjectIDRow
		if err := rows.Scan(
			&i.CreatedAt,
			&i.Amount,
			&i.Name,
			&i.Avatar,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getProjectRepoByProjectID = `-- name: getProjectRepoByProjectID :one
SELECT repo.repoid, repo.uid, repo.name, repo.url, repo.description, repo.star, repo.fork, repo.last_updated, repo.language, repo.updated_at
FROM repo
         JOIN project ON repo.repoid = project.repoid
WHERE project.projectid = $1
`

func (q *Queries) getProjectRepoByProjectID(ctx context.Context, projectid pgtype.UUID) (Repo, error) {
	row := q.db.QueryRow(ctx, getProjectRepoByProjectID, projectid)
	var i Repo
	err := row.Scan(
		&i.Repoid,
		&i.Uid,
		&i.Name,
		&i.Url,
		&i.Description,
		&i.Star,
		&i.Fork,
		&i.LastUpdated,
		&i.Language,
		&i.UpdatedAt,
	)
	return i, err
}

const getProjectTeamByProjectID = `-- name: getProjectTeamByProjectID :many
SELECT "user".name, "user".location, "user".avatar, teammember.role, "user".login, "user".uid
FROM teammember
         JOIN "user" ON teammember.uid = "user".uid
WHERE projectid = $1
`

type getProjectTeamByProjectIDRow struct {
	Name     string
	Location *string
	Avatar   *string
	Role     string
	Login    string
	Uid      pgtype.UUID
}

func (q *Queries) getProjectTeamByProjectID(ctx context.Context, projectid pgtype.UUID) ([]getProjectTeamByProjectIDRow, error) {
	rows, err := q.db.Query(ctx, getProjectTeamByProjectID, projectid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []getProjectTeamByProjectIDRow
	for rows.Next() {
		var i getProjectTeamByProjectIDRow
		if err := rows.Scan(
			&i.Name,
			&i.Location,
			&i.Avatar,
			&i.Role,
			&i.Login,
			&i.Uid,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getTotalProjectDonationByProjectID = `-- name: getTotalProjectDonationByProjectID :one
SELECT SUM(donation.amount)
FROM donation
         JOIN "user" ON "user".uid = donation.uid
         JOIN project ON project.projectid = donation.projectid
WHERE donation.projectid = $1
GROUP BY donation.projectid
`

func (q *Queries) getTotalProjectDonationByProjectID(ctx context.Context, projectid pgtype.UUID) (int64, error) {
	row := q.db.QueryRow(ctx, getTotalProjectDonationByProjectID, projectid)
	var sum int64
	err := row.Scan(&sum)
	return sum, err
}

const insertNewDonation = `-- name: insertNewDonation :exec
INSERT INTO donation (uid, projectid, amount)
VALUES ($1, $2, $3)
`

type insertNewDonationParams struct {
	Uid       pgtype.UUID
	Projectid pgtype.UUID
	Amount    pgtype.Numeric
}

func (q *Queries) insertNewDonation(ctx context.Context, arg insertNewDonationParams) error {
	_, err := q.db.Exec(ctx, insertNewDonation, arg.Uid, arg.Projectid, arg.Amount)
	return err
}

const insertNewTagIfNotExisting = `-- name: insertNewTagIfNotExisting :exec
INSERT INTO "tag" (name)
SELECT new_tags.name
FROM unnest($1::varchar[]) AS new_tags(name)
WHERE NOT EXISTS (SELECT 1
                  FROM "tag" t
                  WHERE t.name = new_tags.name)
`

func (q *Queries) insertNewTagIfNotExisting(ctx context.Context, dollar_1 []string) error {
	_, err := q.db.Exec(ctx, insertNewTagIfNotExisting, dollar_1)
	return err
}

const insertNewTagsToProjectTag = `-- name: insertNewTagsToProjectTag :exec
INSERT INTO "projectTag" (projectid, tagid)
SELECT $1, t.tagid
FROM "tag" t
WHERE t.name = ANY ($2::varchar[])
`

type insertNewTagsToProjectTagParams struct {
	Projectid pgtype.UUID
	Column2   []string
}

func (q *Queries) insertNewTagsToProjectTag(ctx context.Context, arg insertNewTagsToProjectTagParams) error {
	_, err := q.db.Exec(ctx, insertNewTagsToProjectTag, arg.Projectid, arg.Column2)
	return err
}

const insertNewTeamMember = `-- name: insertNewTeamMember :exec
INSERT INTO teammember (projectid, uid, role)
VALUES ($1, $2, 'Contributor')
`

type insertNewTeamMemberParams struct {
	Projectid pgtype.UUID
	Uid       pgtype.UUID
}

func (q *Queries) insertNewTeamMember(ctx context.Context, arg insertNewTeamMemberParams) error {
	_, err := q.db.Exec(ctx, insertNewTeamMember, arg.Projectid, arg.Uid)
	return err
}

const updateProjectTitleDescription = `-- name: updateProjectTitleDescription :exec
UPDATE "project"
SET title       = $2,
    description = $3
WHERE projectid = $1
`

type updateProjectTitleDescriptionParams struct {
	Projectid   pgtype.UUID
	Title       string
	Description string
}

func (q *Queries) updateProjectTitleDescription(ctx context.Context, arg updateProjectTitleDescriptionParams) error {
	_, err := q.db.Exec(ctx, updateProjectTitleDescription, arg.Projectid, arg.Title, arg.Description)
	return err
}

const updateRoadmapStatus = `-- name: updateRoadmapStatus :exec
UPDATE roadmap
SET status = $3
WHERE projectid = $1 AND roadmap = $2
`

type updateRoadmapStatusParams struct {
	Projectid pgtype.UUID
	Roadmap   string
	Status    string
}

func (q *Queries) updateRoadmapStatus(ctx context.Context, arg updateRoadmapStatusParams) error {
	_, err := q.db.Exec(ctx, updateRoadmapStatus, arg.Projectid, arg.Roadmap, arg.Status)
	return err
}

const updateTeamMemberRole = `-- name: updateTeamMemberRole :exec
UPDATE teammember
SET role = $3
WHERE uid = $2
  AND projectid = $1
`

type updateTeamMemberRoleParams struct {
	Projectid pgtype.UUID
	Uid       pgtype.UUID
	Role      string
}

func (q *Queries) updateTeamMemberRole(ctx context.Context, arg updateTeamMemberRoleParams) error {
	_, err := q.db.Exec(ctx, updateTeamMemberRole, arg.Projectid, arg.Uid, arg.Role)
	return err
}
