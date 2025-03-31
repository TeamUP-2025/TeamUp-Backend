package services

import (
	"context"
	"github.com/google/go-github/v69/github"
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

func GetUserRepository(token string) ([]*github.Repository, *github.Response, error) {
	client := github.NewClient(nil).WithAuthToken(token)

	opt := &github.RepositoryListByAuthenticatedUserOptions{
		Sort:       "updated",
		Visibility: "public",
	}

	return client.Repositories.ListByAuthenticatedUser(context.Background(), opt)
}

func GetUserProfile(token string) (*github.User, *github.Response, error) {
	client := github.NewClient(nil).WithAuthToken(token)
	return client.Users.Get(context.Background(), "")
}