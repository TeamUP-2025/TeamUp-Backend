package main

import (
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/config"
	"github.com/TeamUP-2025/TeamUp-Backend/handlers"
	"github.com/TeamUP-2025/TeamUp-Backend/middleware"
	"github.com/go-chi/chi/v5"
)

func main() {
	cfg := config.LoadConfig()
	r := chi.NewRouter()
	authHandler := handlers.NewAuthHandler(
		cfg.GithubClientID,
		cfg.GithubClientSecret,
		cfg.JWTSecret,
		cfg.DatabaseURL,
	)

	githubHandler := handlers.NewGithubHandler(
		cfg.GithubClientID,
		cfg.GithubClientSecret,
		cfg.DatabaseURL,
	)

	projectHandler := handlers.NewProjectHandler(
		cfg.DatabaseURL,
	)

	r.Group(func(r chi.Router) {
		r.Get("/auth/github", authHandler.HandleGithubLogin)
		r.Get("/auth/github/callback", authHandler.HandleGithubCallback)
	})

	r.Group(func(r chi.Router) {
		r.Use(middleware.UserOnly(cfg))
		r.Get("/git/profile", githubHandler.GithubProfileHandler)
		r.Get("/git/repos", githubHandler.GithubRecentRepoHandler)
	})

	r.Route("/project",func(r chi.Router) {
		r.Get("/", projectHandler.HandleSearchProject)
		r.Get("/{projectId}", projectHandler.HandleGetProjectByID)
		r.Post("/{projectId}/join", projectHandler.HandlerCreateApplication)
	})

	r.Get("/profile/{login}", projectHandler.HandleGetUserByLogin)
	r.Get("/repos/{login}", projectHandler.HandleGetRepoByLogin)

	http.ListenAndServe(":8080", r)
}
