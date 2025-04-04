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
		Sort:        "updated",
		Visibility:  "public",
		Affiliation: "owner",
	}

	return client.Repositories.ListByAuthenticatedUser(context.Background(), opt)
}

func GetUserProfile(token string) (*github.User, *github.Response, error) {
	client := github.NewClient(nil).WithAuthToken(token)
	return client.Users.Get(context.Background(), "")
}


func AddCollaborator(token string, owner string, repo string, user string) error {
	client := github.NewClient(nil).WithAuthToken(token)
	_, _,err := client.Repositories.AddCollaborator(context.Background(), owner, repo, user, nil)
	return err
}

func RemoveCollaborator(token string, owner string, repo string, user string) error {
	client := github.NewClient(nil).WithAuthToken(token)
	_, err := client.Repositories.RemoveCollaborator(context.Background(), owner, repo, user)
	return err
}
