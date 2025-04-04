package db

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type TeamMemberRequest struct {
	ProjectId string `json:"projectId"`
	UserId    string `json:"userId"`
	Role      string `json:"role"`
}

func UpdateTeamMemberRole(r *http.Request, databaseUrl string) error {
	ctx := context.Background()

	var request TeamMemberRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)
	fmt.Println("role", request.Role)

	conn, err := pgx.Connect(ctx, databaseUrl)
	defer conn.Close(ctx)
	if err != nil {
		return err
	}
	

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)
	if err != nil {
		return err
	}

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)
	if err != nil {
		return err
	}

	// Update member role
	err = queries.updateTeamMemberRole(ctx, updateTeamMemberRoleParams{
		Projectid: puuid, Uid: uuuid, Role: request.Role,
	})
	if err != nil {
		return err
	}
	return err
}

func DeleteTeamMember(r *http.Request, databaseUrl string) (TeamMemberRequest, error) {
	ctx := context.Background()



	var request TeamMemberRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return TeamMemberRequest{}, err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return TeamMemberRequest{}, err
	}
	defer conn.Close(ctx)



	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)

	if err != nil {
		return TeamMemberRequest{}, err
	}

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)

	if err != nil {
		return TeamMemberRequest{}, err
	}



	// Delete user-project association from teammember table
	err = queries.deleteTeamMember(ctx, deleteTeamMemberParams{
		Projectid: puuid, Uid: uuuid,
	})
	if err != nil {
		return TeamMemberRequest{}, err
	}
	return request, nil
}

func ApproveApplication(r *http.Request, databaseUrl string) (TeamMemberRequest, error) {
	ctx := context.Background()

	var request TeamMemberRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return TeamMemberRequest{}, err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return TeamMemberRequest{}, err
	}

	defer conn.Close(ctx)
	
	

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)
	if err != nil {
		return TeamMemberRequest{}, err
	}

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)
	if err != nil {
		return TeamMemberRequest{}, err
	}

	// Delete Application of user associated with project
	err = queries.deleteApplication(ctx, deleteApplicationParams{
		Projectid: puuid, Uid: uuuid,
	})
	if err != nil {
		return TeamMemberRequest{}, err
	}

	// Insert the new user to Teammember table
	err = queries.insertNewTeamMember(ctx, insertNewTeamMemberParams{
		Projectid: puuid, Uid: uuuid,
	})
	if err != nil {
		return TeamMemberRequest{}, err
	}

	return request , nil
}

func DenyApplication(r *http.Request, databaseUrl string) ( error) {
	ctx := context.Background()

	var request TeamMemberRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}

	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)

	conn, err := pgx.Connect(ctx, databaseUrl)
	defer conn.Close(ctx)
	if err != nil {
		return err
	}

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)
	if err != nil {
		return err
	}

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)
	if err != nil {
		return err
	}

	// Delete Application of user associated with project
	err = queries.deleteApplication(ctx, deleteApplicationParams{
		Projectid: puuid, Uid: uuuid,
	})
	fmt.Println("Deleted")
	if err != nil {
		return err
	}

	return nil
}

func GetTeamByProjectID(r *http.Request, databaseUrl string) ([]getProjectTeamByProjectIDRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return nil, err
	}
	defer conn.Close(ctx)

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(chi.URLParam(r, "projectId"))

	if err != nil {
		return nil, err
	}

	return queries.getProjectTeamByProjectID(ctx, puuid)
}
