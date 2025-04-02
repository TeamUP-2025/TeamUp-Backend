// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: query.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const getCachedRepos = `-- name: GetCachedRepos :many
SELECT repoid, uid, name, url, description, star, fork, last_updated, language, updated_at
FROM repo
WHERE
    uid = $1
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

const getRepoByLogin = `-- name: GetRepoByLogin :many
SELECT repoid, uid, name, url, description, star, fork, last_updated, language, updated_at
FROM "repo"
WHERE uid in (
  SELECT uid
  FROM "user"
  WHERE "user".login = $1
)
ORDER BY star DESC, updated_at DESC NULLS LAST
LIMIT 4
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

const getUserInfoByLogin = `-- name: GetUserInfoByLogin :one
SELECT
    uid,
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
WHERE
    "user".login = $1
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
WHERE
    uid = $1
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
SELECT token FROM "user" WHERE uId = $1
`

func (q *Queries) GetUserToken(ctx context.Context, uid pgtype.UUID) (string, error) {
	row := q.db.QueryRow(ctx, getUserToken, uid)
	var token string
	err := row.Scan(&token)
	return token, err
}

const searchProjectByParameter = `-- name: SearchProjectByParameter :many
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
WHERE
    uid = $1 RETURNING uid, login, name, avatar, location, token, bio, followers, following, public_repos, total_private_repos, html_url, last_updated
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
INSERT INTO
    repo (
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
VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        CURRENT_TIMESTAMP
    ) ON CONFLICT (uid, name) DO
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

// - name: getAllUser :many
// SELECT * FROM user;
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
