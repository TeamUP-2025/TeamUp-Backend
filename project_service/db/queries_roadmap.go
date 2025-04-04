package db

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type RoadmapUpdateRequest struct {
	ProjectId   string `json:"projectId"`
	Roadmap     string `json:"roadmap"`
	Status      string `json:"status"`
}

type RoadmapAddRequest struct {
	ProjectId string `json:"projectId"`
	Roadmap   string `json:"roadmap"`
	Description string `json:"description"`
}

func UpdateRoadmapStatusQuery(r *http.Request, databaseUrl string) error {
	ctx := context.Background()
	
	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return err
	}

	var request RoadmapUpdateRequest
	err = json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}


	defer conn.Close(ctx)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(request.ProjectId)
	if err != nil {
		return err
	}

	return queries.updateRoadmapStatus(ctx, updateRoadmapStatusParams{
		Projectid: uuid,
		Roadmap:   request.Roadmap,
		Status:    request.Status,
	})
}

func AddRoadmapMilestoneQuery(r *http.Request, databaseUrl string) error {
	ctx := context.Background()
	
	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return err
	}

	var request RoadmapAddRequest
	err = json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(request.ProjectId)
	if err != nil {
		return err
	}

	return queries.addRoadmap(ctx, addRoadmapParams{
		Projectid: uuid,
		Roadmap:   request.Roadmap,
		Description: request.Description,
	})
}
