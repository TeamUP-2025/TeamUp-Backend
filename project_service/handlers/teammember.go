package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/TeamUP-2025/TeamUp-Backend/services"
	"fmt"

	"github.com/go-chi/chi/v5"
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
	token, err := getTokenFromClaims(r, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	request, err := db.DeleteTeamMember(r, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	reponse, err := db.GetRepoOwnerLoginAndRepoNameFromProjectIDAndCollaborator(request.ProjectId, request.UserId, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	fmt.Println(reponse.Owner, reponse.Reponame, request.UserId, token)
	err = services.RemoveCollaborator(token, reponse.Owner, reponse.Reponame, reponse.Collaborator)
	if err != nil {
		respondInternalServerError(w, err)
		fmt.Println("error in remove collaborator",err)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandlerApproveApplication(w http.ResponseWriter, r *http.Request) {
	token, err := getTokenFromClaims(r, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	request, err := db.ApproveApplication(r, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		fmt.Println("error in approve",err)
		return
	}


	reponse, err := db.GetRepoOwnerLoginAndRepoNameFromProjectIDAndCollaborator(request.ProjectId, request.UserId, h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		fmt.Println("error in get GetRepoOwnerLoginAndRepoNameFromProjectIDAndCollaborator",err)
		return
	}

	fmt.Println(reponse.Owner, reponse.Reponame, reponse.Collaborator, token)

	err = services.AddCollaborator(token, reponse.Owner, reponse.Reponame, reponse.Collaborator)

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
