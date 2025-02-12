package main

import (
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/config"
	"github.com/TeamUP-2025/TeamUp-Backend/handlers"
	"github.com/go-chi/chi/v5"
)

func main() {
	cfg := config.LoadConfig()
	r := chi.NewRouter()
	authHandler := handlers.NewAuthHandler(
		cfg.GithubClientID,
		cfg.GithubClientSecret,
		cfg.JWTSecret,
	)

	r.Group(func(r chi.Router) {
		r.Get("/auth/github", authHandler.HandleGithubLogin)
		r.Get("/auth/github/callback", authHandler.HandleGithubCallback)
	})

	http.ListenAndServe(":8080", r)

}
