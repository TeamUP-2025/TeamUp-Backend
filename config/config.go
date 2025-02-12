package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	GithubClientID     string
	GithubClientSecret string
	JWTSecret          string
}

func LoadConfig() *Config {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return &Config{
		GithubClientID:     os.Getenv("GithubClientID"),
		GithubClientSecret: os.Getenv("GithubClientSecret"),
		JWTSecret:          "test",
	}
}
