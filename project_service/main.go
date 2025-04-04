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

	repoHandler := handlers.NewRepoHandler(
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
		r.Get("/repos/uid", repoHandler.HandleGetRepoByUid)
	})

	r.Route("/project", func(r chi.Router) {
		r.Get("/", projectHandler.HandleSearchProject)
		r.Get("/{projectId}", projectHandler.HandleGetProjectByID)
		r.Get("/repo/{projectId}", repoHandler.HandleGetRepoByProjectID)
		r.Post("/{projectId}/join", projectHandler.HandlerCreateApplication)
		r.Post("/update", projectHandler.HandlerUpdateProject)
		r.Group(func(r chi.Router) {
			r.Use(middleware.UserOnly(cfg))
			r.Post("/create", projectHandler.HandlerCreateProject)
		})
		r.Post("/update/teammember", projectHandler.HandlerUpdateTeamMemberRole)
		r.Post("/delete/teammember", projectHandler.HandlerDeleteTeamMember)
		r.Post("/approve/application", projectHandler.HandlerApproveApplication)
		r.Post("/deny/application", projectHandler.HandlerDenyApplication)
	})

	r.Route("/repo", func(r chi.Router) {
		r.Get("/{projectId}", repoHandler.HandleGetRepoByProjectID)
	})

	r.Get("/profile/{login}", projectHandler.HandleGetUserByLogin)
	r.Get("/repos/{login}", projectHandler.HandleGetRepoByLogin)

	http.ListenAndServe(":8080", r)
}
