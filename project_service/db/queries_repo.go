package db

import (
	"context"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

func GetRepoByLoginQuery(login string, databaseUrl string) ([]Repo, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return []Repo{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.GetRepoByLogin(ctx, login)
}

func GetRepoByUidQuery(uid string, databaseUrl string) ([]Repo, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return []Repo{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(uid)
	if err != nil {
		return []Repo{}, err
	}

	return queries.GetRepoByUid(ctx, uuid)
}

func GetRepoByProjectId(uid string, databaseUrl string) (Repo, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return Repo{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	repo_uuid := pgtype.UUID{}
	err = repo_uuid.Scan(uid)
	if err != nil {
		return Repo{}, err
	}

	return queries.getProjectRepoByProjectID(ctx, repo_uuid)
}
