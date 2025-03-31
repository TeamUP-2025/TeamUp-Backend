package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"github.com/golang-jwt/jwt/v5"
	"github.com/TeamUP-2025/TeamUp-Backend/db"
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

func getTokenFromClaims(r *http.Request, databaseUrl string) (string , error) {
	var claims jwt.MapClaims = r.Context().Value("token").(jwt.MapClaims)
	accessToken, err := db.GetTokenQuery(claims["uid"].(string), databaseUrl)
	if err != nil {
		return "", err
	}
	return  accessToken, nil
}