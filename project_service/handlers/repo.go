package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/golang-jwt/jwt/v5"
)

type RepoHandler struct {
	databaseUrl string
}

func NewRepoHandler(
	databaseUrl string,
) *RepoHandler {

	return &RepoHandler{
		databaseUrl: databaseUrl,
	}
}

func (h *RepoHandler) HandleGetRepoByUid(w http.ResponseWriter, r *http.Request) {

	
	ctx := r.Context()
	claims := ctx.Value("token").(jwt.MapClaims)
	uid := claims["uid"].(string)


	repo, err := db.GetRepoByUidQuery(uid, h.databaseUrl)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	repoJson, err := json.Marshal(repo)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	w.Write(repoJson)
}