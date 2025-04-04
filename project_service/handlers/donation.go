package handlers

import (
	"encoding/json"
	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/go-chi/chi/v5"
	"net/http"
)

func (h *ProjectHandler) HandleGetProjectDonationByProjectID(w http.ResponseWriter, r *http.Request) {
	donation, err := db.GetProjectDonationByProjectID(chi.URLParam(r, "projectId"), h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	donationJson, err := json.Marshal(donation)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.Write(donationJson)
}

func (h *ProjectHandler) HandleGetTotalProjectDonationByProjectID(w http.ResponseWriter, r *http.Request) {
	donation, err := db.GetTotalProjectDonationByProjectID(chi.URLParam(r, "projectId"), h.databaseUrl)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	donationJson, err := json.Marshal(donation)

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.Write(donationJson)
}
