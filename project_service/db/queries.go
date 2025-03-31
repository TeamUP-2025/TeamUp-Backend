package db

import (
	"context"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
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

func GetTokenQuery(uid string, databaseUrl string) (string, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return "", err
	}

	defer conn.Close(ctx)

	queries := New(conn)
	uuid := pgtype.UUID{}
	err = uuid.Scan(uid)
	if err != nil {
		return "", err
	}

	return queries.GetUserToken(ctx, uuid)

}