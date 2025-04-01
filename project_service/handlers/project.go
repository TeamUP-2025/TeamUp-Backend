package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
)

type ProjectHandler struct {
	databaseUrl string
}

func NewProjectHandler(
	databaseUrl string,
) *ProjectHandler {

	return &ProjectHandler{
		databaseUrl: databaseUrl,
	}
}

func (h *ProjectHandler) HandleSearchProject(w http.ResponseWriter, r *http.Request) {

	projectData, err := db.SearchProjectByParameterQuery(r, h.databaseUrl)

	if err != nil {
		http.Error(w, "Failed to get project", http.StatusInternalServerError)
		return
	}

	repoJson, err := json.Marshal(projectData)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.Write(repoJson)
}
