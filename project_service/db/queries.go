package db

import (
	"context"

	"github.com/jackc/pgx/v5"
)

func UpsertUserQuery(data UpsertUseAndReturnUidAndNameParams, databaseUrl string) (UpsertUseAndReturnUidAndNameRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return UpsertUseAndReturnUidAndNameRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.UpsertUseAndReturnUidAndName(ctx, data)

}

func GetTokenQuery(data UpsertUseAndReturnUidAndNameParams, databaseUrl string) (UpsertUseAndReturnUidAndNameRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return UpsertUseAndReturnUidAndNameRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.UpsertUseAndReturnUidAndName(ctx, data)

}