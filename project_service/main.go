package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/config"
	"github.com/TeamUP-2025/TeamUp-Backend/handlers"
	"github.com/TeamUP-2025/TeamUp-Backend/middleware"
	"github.com/go-chi/chi/v5"
)

// respondInternalServerError writes an internal server error JSON response.
func respondInternalServerError(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusInternalServerError)
	w.Header().Set("Content-Type", "application/json")
	resp := map[string]string{
		"message": err.Error(),
	}
	jsonResp, jsonErr := json.Marshal(resp)
	if jsonErr != nil {
		// Log the error since writing JSON failed.
		log.Fatalf("Error during JSON marshal: %s", jsonErr)
	}

	_, writeErr := w.Write(jsonResp)
	if writeErr != nil {
		log.Printf("Error writing response: %s", writeErr)
	}
}

func main() {
	cfg := config.LoadConfig()
	r := chi.NewRouter()
	authHandler := handlers.NewAuthHandler(
		cfg.GithubClientID,
		cfg.GithubClientSecret,
		cfg.JWTSecret,
		cfg.DatabaseURL,
	)

	r.Group(func(r chi.Router) {
		r.Get("/auth/github", authHandler.HandleGithubLogin)
		r.Get("/auth/github/callback", authHandler.HandleGithubCallback)
	})

	r.Group(func(r chi.Router) {
		r.Use(middleware.UserOnly(cfg))
		r.Get("/git/profile", handlers.GithubProfileHandler)
		r.Get("/git/repos", handlers.GithubRecentRepoHandler)
	})

	http.ListenAndServe(":8080", r)
}
