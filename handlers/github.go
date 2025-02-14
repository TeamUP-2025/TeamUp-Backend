package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/google/go-github/v69/github"
)

func GithubProfileHandler(w http.ResponseWriter, r *http.Request) {

	var token string = r.Context().Value("token").(string)
	client := github.NewClient(nil).WithAuthToken(token)

	user, _, err := client.Users.Get(context.Background(), "")

	if err != nil {
		return
	}

	userJson, err := json.Marshal(user)
	w.Write(userJson)
	if err != nil {
		return
	}
}

func GithubRecentRepoHandler(w http.ResponseWriter, r *http.Request) {
	var token string = r.Context().Value("token").(string)
	client := github.NewClient(nil).WithAuthToken(token)

	opt := &github.RepositoryListByAuthenticatedUserOptions{
		Sort:       "updated",
		Visibility: "public",
	}
	repo, _, err := client.Repositories.ListByAuthenticatedUser(context.Background(), opt)

	if err != nil {
		return
	}

	repoJson, err := json.Marshal(repo[:4])
	if err != nil {
		return
	}
	w.Write([]byte(repoJson))
}
