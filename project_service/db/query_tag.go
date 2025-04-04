package db

import (
	"context"
	"encoding/json"
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


	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return err
	}

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(request.ProjectId)
	if err != nil {
		return err
	}

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


	// Insert new tags that's not existing in Tag table
	err = queries.insertNewTagIfNotExisting(ctx, request.Tags)
	if err != nil {
		return err
	}

	// Insert new tags to projectTag Table
	err = queries.insertNewTagsToProjectTag(ctx, insertNewTagsToProjectTagParams{Projectid: uuid, Column2: request.Tags})
	if err != nil {
		return err
	}
	return err
}
