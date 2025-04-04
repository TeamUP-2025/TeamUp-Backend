package db

import (
	"context"
	"encoding/json"
	"net/http"
	"fmt"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

func InsertIntoApplicationQuery(r *http.Request, databaseUrl string) (int, error) {
	ctx := context.Background()

	var request ApplicationRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return 0, err
	}

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return 0, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	uid := pgtype.UUID{}
	err = uid.Scan(request.UId)
	if err != nil {
		return 0, err
	}

	pid := pgtype.UUID{}
	err = pid.Scan(request.ProjectId)
	if err != nil {
		return 0, err
	}

	res, err := queries.CheckAdmissionAndMember(ctx, CheckAdmissionAndMemberParams{
		Uid:       uid,
		Projectid: pid,
	})

	// THEN 3 -- Both
	// THEN 1 -- Member only
	// THEN 2 -- Applicant only
	// 0 is okay
	if res != 0 {
		return int(res), nil
	}

	if err != nil {
		return 0, err
	}

	err = queries.InsertApplication(ctx, InsertApplicationParams{
		Uid:         uid,
		Projectid:   pid,
		Coverletter: &request.CoverLetter,
	})

	if err != nil {
		return 0, err
	}

	return 4, nil
}

func GetApplicationByProjectId(projectId string, databaseUrl string) ([]getProjectApplicationByProjectIDRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return []getProjectApplicationByProjectIDRow{}, err
	}
	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(projectId)

	fmt.Println(uuid)
	
	if err != nil {
		return []getProjectApplicationByProjectIDRow{}, err
	}
	return queries.getProjectApplicationByProjectID(ctx, uuid)
}
