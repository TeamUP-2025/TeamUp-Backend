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
