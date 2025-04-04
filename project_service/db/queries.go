package db

import (
	"context"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type ApplicationRequest struct {
	ProjectId   string `json:"projectId"`
	CoverLetter string `json:"coverLetter"`
	UId         string `json:"uId"`
}

func UpsertUserQuery(data UpsertUseAndReturnUidAndNameParams, databaseUrl string) (UpsertUseAndReturnUidAndNameRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return UpsertUseAndReturnUidAndNameRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.UpsertUseAndReturnUidAndName(ctx, data)

}

func GetTokenQuery(uid string, databaseUrl string) (string, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return "", err
	}

	defer conn.Close(ctx)

	queries := New(conn)
	uuid := pgtype.UUID{}
	err = uuid.Scan(uid)
	if err != nil {
		return "", err
	}

	return queries.GetUserToken(ctx, uuid)

}


func GetUserByLoginQuery(login string, databaseUrl string) (GetUserInfoByLoginRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return GetUserInfoByLoginRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	return queries.GetUserInfoByLogin(ctx, login)
}

func GetProjectById(projectId string, databaseUrl string) (getProjectByProjectIdRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return getProjectByProjectIdRow{}, err
	}
	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(projectId)
	if err != nil {
		return getProjectByProjectIdRow{}, err
	}
	return queries.getProjectByProjectId(ctx, uuid)
}


func GetRepoOwnerLoginAndRepoNameFromProjectIDAndCollaborator(projectId string, collaborator string, databaseUrl string) (getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaboratorRow, error) {
	ctx := context.Background()

	conn, err := pgx.Connect(ctx, databaseUrl)
	if err != nil {
		return getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaboratorRow{}, err
	}

	defer conn.Close(ctx)

	queries := New(conn)

	uuid := pgtype.UUID{}
	err = uuid.Scan(projectId)
	if err != nil {
		return getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaboratorRow{}, err
	}

	collaboratorUuid := pgtype.UUID{}
	err = collaboratorUuid.Scan(collaborator)
	if err != nil {
		return getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaboratorRow{}, err
	}

	return queries.getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaborator(ctx, getRepoOwnerLoginAndRepoNameFromProjectIDAndCollaboratorParams{
		Projectid: uuid,
		Uid: collaboratorUuid,
	})
}