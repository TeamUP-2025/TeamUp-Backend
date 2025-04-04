package handlers

import (
	"github.com/TeamUP-2025/TeamUp-Backend/db"
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
