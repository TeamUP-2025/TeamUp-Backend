package db

import (
	"context"
	"encoding/json"
	"net/http"
	"strings"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/golang-jwt/jwt/v5"
)

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

func CreateProject(r *http.Request, databaseUrl string) (string, error) {

	ctx := r.Context()
	claims := ctx.Value("token").(jwt.MapClaims)
	uid := claims["uid"].(string)

	var req CreateProjectRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		return "", err
	}	

	conn, err := pgx.Connect(context.Background(), databaseUrl)
	if err != nil {
		return "", err
	}
	defer conn.Close(context.Background())

	queries := New(conn)

	// Convert string uid to UUID
	uuid := pgtype.UUID{}
	if err := uuid.Scan(uid); err != nil {
		return "", err
	}


	projectId, err := queries.InsertProject(context.Background(), InsertProjectParams{
		Title: req.Title,
		Description: req.Description,
		// Name: req.Repository.Name,
		Name: "classdiagram",
		Status: &req.Status,
		Name_2: req.License.Name,
		Uid: uuid,
	})
	if err != nil {
		return "", err
	}

	roadmap := make([]string, len(req.Roadmap))
	for i, r := range req.Roadmap {
		roadmap[i] = r.Roadmap
	}

	roadmapDescription := make([]string, len(req.Roadmap))
	for i, r := range req.Roadmap {
		roadmapDescription[i] = r.Description
	}

	roadmapStatus := make([]string, len(req.Roadmap))
	for i, r := range req.Roadmap {
		roadmapStatus[i] = r.Status
	}
	
	
	err = queries.InsertRoadmap(context.Background(), InsertRoadmapParams{
		Projectid: projectId,
		Column2: roadmap,
		Column3: roadmapDescription,
		Column4: roadmapStatus,
	})
	if err != nil {
		return "", err
	}

	goal := make([]string, len(req.Goals))
	for i, g := range req.Goals {
		goal[i] = g.Text
	}

	goalDescription := make([]string, len(req.Goals))
	for i, g := range req.Goals {
		goalDescription[i] = g.Description
	}

	err = queries.InsertGoal(context.Background(), InsertGoalParams{
		Projectid: projectId,
		Column2: goal,
		Column3: goalDescription,
	})

	if err != nil {
		return "", err
	}

	// Delete the projectTag associated with project
	err = queries.deleteExistingProjectTag(ctx, projectId)
	if err != nil {
		return "",err
	}

	// Insert new tags that's not existing in Tag table
	err = queries.insertNewTagIfNotExisting(ctx, req.Tags)
	if err != nil {
		return "",err
	}

	// Insert new tags to projectTag Table
	err = queries.insertNewTagsToProjectTag(ctx, insertNewTagsToProjectTagParams{Projectid: projectId, Column2: req.Tags})
	if err != nil {
		return "", err
	}

	return projectId.String(), nil
}

func GetProjectByMemberStatus(r *http.Request, databaseUrl string) ([]GetProjectByMemberStatusRow, error) {

	ctx := r.Context()
	claims := ctx.Value("token").(jwt.MapClaims)
	uid := claims["uid"].(string)
	
	conn, err := pgx.Connect(context.Background(), databaseUrl)
	if err != nil {
		return nil, err
	}
	defer conn.Close(context.Background())
	
	queries := New(conn)

	uuid := pgtype.UUID{}
	if err := uuid.Scan(uid); err != nil {
		return nil, err
	}

	return queries.GetProjectByMemberStatus(context.Background(),  uuid)
}

type CreateProjectRequest struct {
	Title string `json:"title"`
	Description string `json:"description"`
	LongDescription string `json:"longDescription"`
	Tags []string `json:"tags"`
	Status string `json:"status"`
	Roadmap []struct {
		Roadmap string `json:"roadmap"`
		Description string `json:"description"`
		Status string `json:"status"`
	} `json:"roadmap"`
	Goals []struct {
		Text string `json:"text"`
		Description string `json:"description"`
	} `json:"goals"`
	License struct {
		Name string `json:"name"`
		Description string `json:"description"`
		Permission []string `json:"permission"`
		Condition []string `json:"condition"`
		Limitation []string `json:"limitation"`
	} `json:"license"`
	Repository struct {
		Id string `json:"id"`
		Name string `json:"name"`
		Owner string `json:"owner"`
	} `json:"repository"`
}