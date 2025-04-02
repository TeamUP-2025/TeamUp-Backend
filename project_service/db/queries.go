package db

import (
	"context"
	"net/http"
	"strings"

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

func SearchProjectByParameterQuery(r *http.Request, databaseUrl string) ([]SearchProjectByParameterRow, error) {
	// Parse query parameters
	query := r.URL.Query()
	title := query.Get("title")
	status := query.Get("status")
	licenseName := query.Get("licenseName")
	tagNames := make([]string, 0)
	if tagNamesParam := query.Get("tagNames"); tagNamesParam != "" {
		tagNames = strings.Split(tagNamesParam, ",")
	}

	// Connect to database
	ctx := r.Context()
	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return []SearchProjectByParameterRow{}, err
	}
	defer conn.Close(ctx)

	// Create query instance
	queries := New(conn)

	// Execute search query
	return queries.SearchProjectByParameter(ctx,
		SearchProjectByParameterParams{
			Column1: title,
			Column2: status,
			Column3: licenseName,
			Column4: tagNames,
		},
	)

}

func GetUserByLoginQuery(login string, databaseUrl string) (GetUserInfoByLoginRow ,error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return GetUserInfoByLoginRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.GetUserInfoByLogin(ctx, login)
}

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