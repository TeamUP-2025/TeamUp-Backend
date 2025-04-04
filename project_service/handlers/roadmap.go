package handlers

import (
	"fmt"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
)

func (h *ProjectHandler) HandleUpdateRoadmapStatus(w http.ResponseWriter, r *http.Request) {
	err := db.UpdateRoadmapStatusQuery(r, h.databaseUrl)
	fmt.Println(err)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusOK)
}

func (h *ProjectHandler) HandleAddRoadmapMilestone(w http.ResponseWriter, r *http.Request) {
	err := db.AddRoadmapMilestoneQuery(r, h.databaseUrl)
	if err != nil {
		fmt.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusOK)
}
