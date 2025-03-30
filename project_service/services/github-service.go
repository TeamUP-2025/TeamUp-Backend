package services

import (
	"context"
)

type GithubService struct {
	ctx          context.Context
	clientID     string
	clientSecret string
}

func NewGithubService(clientID, clientSecret string) *GithubService {
	return &GithubService{
		ctx:          context.Background(),
		clientID:     clientID,
		clientSecret: clientSecret,
	}
}
