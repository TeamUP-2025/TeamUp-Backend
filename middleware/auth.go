package middleware

import (
	"context"
	"fmt"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/config"
	"github.com/golang-jwt/jwt/v5"
)

func UserOnly(cfg *config.Config) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// get token from cookie
			tokenFromCookie, err := r.Cookie("token")

			// parse token
			if err != nil {
				http.Error(w, http.StatusText(http.StatusForbidden), http.StatusForbidden)
				return
			}
			token, err := jwt.Parse(tokenFromCookie.Value, func(token *jwt.Token) (interface{}, error) {
				// Don't forget to validate the alg is what you expect:
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
				}

				// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
				return []byte(cfg.JWTSecret), nil
			})

			if err != nil {
				http.Error(w, http.StatusText(http.StatusForbidden), http.StatusForbidden)
				return
			}

			if claims, ok := token.Claims.(jwt.MapClaims); ok {
				ctx := context.WithValue(r.Context(), "token", claims["access_token"])
				newReq := r.WithContext(ctx)
				next.ServeHTTP(w, newReq)
			} else {
				http.Error(w, http.StatusText(http.StatusForbidden), http.StatusForbidden)
			}

		})
	}
}
