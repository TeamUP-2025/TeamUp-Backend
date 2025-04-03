package db

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"net/http"
)

type UpdateRequest struct {
	ProjectId   string `json:"projectId"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

func UpdateProjectDetailWithTag(r *http.Request, databaseUrl string) error {
	ctx := context.Background()

	var request UpdateRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	fmt.Println("uid", request.ProjectId)
	fmt.Println("coverLetter", request.Title)
	fmt.Println("projectId", request.Description)

	conn, err := pgx.Connect(ctx, databaseUrl)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(request.ProjectId)

	err = queries.updateProjectTitleDescription(ctx, updateProjectTitleDescriptionParams{
		Projectid: uuid, Title: request.Title, Description: request.Description,
	})
	if err != nil {
		return err
	}

	return err
}
