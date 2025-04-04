package db

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
	"net/http"
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

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)

	// Update member role
	err = queries.updateTeamMemberRole(ctx, updateTeamMemberRoleParams{
		Projectid: puuid, Uid: uuuid, Role: request.Role,
	})
	if err != nil {
		return err
	}
	return err
}

func DeleteTeamMember(r *http.Request, databaseUrl string) error {
	ctx := context.Background()

	var request TeamMemberRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		return err
	}
	fmt.Println("projectid", request)
	fmt.Println("projectid", request.ProjectId)
	fmt.Println("userId", request.UserId)

	conn, err := pgx.Connect(ctx, databaseUrl)

	queries := New(conn)

	puuid := pgtype.UUID{}
	err = puuid.Scan(request.ProjectId)

	uuuid := pgtype.UUID{}
	err = uuuid.Scan(request.UserId)

	// Delete user-project association from teammember table
	err = queries.deleteTeamMember(ctx, deleteTeamMemberParams{
		Projectid: puuid, Uid: uuuid,
	})
	if err != nil {
		return err
	}
	return err
}
