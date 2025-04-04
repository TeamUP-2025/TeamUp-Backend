package handlers

import (
	"encoding/json"
	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/go-chi/chi/v5"
	"net/http"
)

func (h *ProjectHandler) HandlerUpdateTeamMemberRole(w http.ResponseWriter, r *http.Request) {
	err := db.UpdateTeamMemberRole(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandlerDeleteTeamMember(w http.ResponseWriter, r *http.Request) {
	err := db.DeleteTeamMember(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandlerApproveApplication(w http.ResponseWriter, r *http.Request) {
	err := db.ApproveApplication(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandlerDenyApplication(w http.ResponseWriter, r *http.Request) {
	err := db.DenyApplication(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandlerGetApplicationByProjectID(w http.ResponseWriter, r *http.Request) {
	applications, err := db.GetApplicationByProjectId(chi.URLParam(r, "projectId"), h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	appJson, err := json.Marshal(applications)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	w.Write(appJson)
}

func (h *ProjectHandler) HandleGetTeamByProjectID(w http.ResponseWriter, r *http.Request) {
	team, err := db.GetTeamByProjectID(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	teamJson, err := json.Marshal(team)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	w.Write(teamJson)
}
