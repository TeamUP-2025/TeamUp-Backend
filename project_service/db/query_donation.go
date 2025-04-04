package db

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"net/http"
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

func CreateDonation(r *http.Request, databaseUrl string) error {
	ctx := context.Background()

	var request DonationRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)
	fmt.Println("amount", request.Amount)

	conn, err := pgx.Connect(ctx, databaseUrl)

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)

	amount := pgtype.Numeric{}
	err = amount.Scan(request.Amount)
	fmt.Println(amount)

	err = queries.insertNewDonation(ctx, insertNewDonationParams{
		Projectid: puuid, Uid: uuuid, Amount: amount,
	})
	if err != nil {
		return err
	}
	return err
}
