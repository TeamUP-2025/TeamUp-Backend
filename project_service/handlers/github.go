package handlers

import (
	"encoding/json"
	"net/http"
	"github.com/TeamUP-2025/TeamUp-Backend/services"
)

func GithubProfileHandler(w http.ResponseWriter, r *http.Request) {

	var token string = r.Context().Value("token").(string)

	user, _, err := services.GetUserProfile(token)

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
	repo, _, err := services.GetUserRepository(token)

	if err != nil {
		return
	}

	repoJson, err := json.Marshal(repo[:4])
	if err != nil {
		return
	}
	w.Write([]byte(repoJson))
}
