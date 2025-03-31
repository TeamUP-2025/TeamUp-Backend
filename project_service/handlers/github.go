package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/services"
)

type GithubHandler struct {
	githubSerice *services.GithubService
	databaseUrl  string
}

func NewGithubHandler(
	clientID,
	clientSecret,
	databaseUrl string,
) *GithubHandler {

	return &GithubHandler{
		githubSerice: services.NewGithubService(clientID, clientSecret),
		databaseUrl:  databaseUrl,
	}
}

func (h *GithubHandler) GithubProfileHandler(w http.ResponseWriter, r *http.Request) {

	accessToken, err := getTokenFromClaims(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	user, _, err := services.GetUserProfile(accessToken)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	userJson, err := json.Marshal(user)
	w.Write(userJson)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}
}

func (h *GithubHandler) GithubRecentRepoHandler(w http.ResponseWriter, r *http.Request) {
	accessToken, err := getTokenFromClaims(r, h.databaseUrl)

	repo, _, err := services.GetUserRepository(accessToken)
	if err != nil {
		return
	}

	repoJson, err := json.Marshal(repo[:4])
	if err != nil {
		return
	}
	w.Write([]byte(repoJson))
}
