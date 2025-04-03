//package db
//
//import (
//	"context"
//	"github.com/jackc/pgx/v5"
//	"github.com/jackc/pgx/v5/pgtype"
//)
//
//func UpdateProjectDetailWithTag(projectId string, databaseUrl string) ([]Repo, error) {
//	ctx := context.Background()
//
//	conn, err := pgx.Connect(ctx, databaseUrl)
//	if err != nil {
//		return getProjectByProjectIdRow{}, err
//	}
//	queries := New(conn)
//
//	uuid := pgtype.UUID{}
//	err = uuid.Scan(projectId)
//	if err != nil {
//		return getProjectByProjectIdRow{}, err
//	}
//	return queries.getProjectByProjectId(ctx, uuid)
//}
