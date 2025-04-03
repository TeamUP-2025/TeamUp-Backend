package handlers

import (
	"encoding/json"
	"github.com/go-chi/chi/v5"
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

func (h *ProjectHandler) HandleGetUserByLogin(w http.ResponseWriter, r *http.Request) {

	projectData, err := db.GetUserByLoginQuery(chi.URLParam(r, "login"), h.databaseUrl)
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

func (h *ProjectHandler) HandleGetProjectByID(w http.ResponseWriter, r *http.Request) {

	projectData, err := db.GetProjectById(chi.URLParam(r, "projectId"), h.databaseUrl)

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

func (h *ProjectHandler) HandleGetRepoByLogin(w http.ResponseWriter, r *http.Request) {

	projectData, err := db.GetRepoByLoginQuery(chi.URLParam(r, "login"), h.databaseUrl)

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
