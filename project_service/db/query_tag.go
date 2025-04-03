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
	ProjectId   string   `json:"projectId"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`
}

func UpdateProjectDetailWithTag(r *http.Request, databaseUrl string) error {
	ctx := context.Background()

	var request UpdateRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("title", request.Title)
	fmt.Println("description", request.Description)
	fmt.Println("tags", request.Tags)

	conn, err := pgx.Connect(ctx, databaseUrl)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(request.ProjectId)

	// Edit Title and Description
	err = queries.updateProjectTitleDescription(ctx, updateProjectTitleDescriptionParams{
		Projectid: uuid, Title: request.Title, Description: request.Description,
	})
	if err != nil {
		return err
	}

	// Delete the projectTag associated with project
	err = queries.deleteExistingProjectTag(ctx, uuid)
	if err != nil {
		return err
	}
	fmt.Println("Deleted Tags")

	// Insert new tags that's not existing in Tag table
	err = queries.insertNewTagIfNotExisting(ctx, request.Tags)
	if err != nil {
		return err
	}
	fmt.Println("Insert non existing tags")

	// Insert new tags to projectTag Table
	err = queries.insertNewTagsToProjectTag(ctx, insertNewTagsToProjectTagParams{Projectid: uuid, Column2: request.Tags})
	if err != nil {
		return err
	}
	fmt.Println("Insert new existing tags")
	return err
}
