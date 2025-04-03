package db

import (
	"context"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

func UpdateProjectDetailWithTag(data updateProjectTitleDescriptionParams, databaseUrl string) error {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(data)

	err = queries.updateProjectTitleDescription(ctx, data)
	if err != nil {
		return err
	}

	return err
}
