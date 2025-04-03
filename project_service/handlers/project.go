package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
)

type ApplicationReponse struct {
	GOOD int
}

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

func (h *ProjectHandler) HandlerCreateApplication(w http.ResponseWriter, r *http.Request) {

	insertStatus, err := db.InsertIntoApplicationQuery(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	responseJson, err := json.Marshal(insertStatus)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	
	fmt.Println(insertStatus)
	fmt.Println(responseJson)

	w.Write(responseJson)
}
