package db

import (
	"context"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type DonationRequest struct {
	ProjectId string `json:"projectId"`
	UserId    string `json:"userId"`
	Amount    string `json:"amount"`
}

func GetProjectDonationByProjectID(projectId string, databaseUrl string) ([]getProjectDonationByProjectIDRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return []getProjectDonationByProjectIDRow{}, err
	}
	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(projectId)
	if err != nil {
		return []getProjectDonationByProjectIDRow{}, err
	}
	return queries.getProjectDonationByProjectID(ctx, uuid)
}

func GetTotalProjectDonationByProjectID(projectId string, databaseUrl string) (int, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return 0, err
	}
	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(projectId)
	if err != nil {
		return 0, err
	}
	result, err := queries.getTotalProjectDonationByProjectID(ctx, uuid)
	return int(result), nil
}
