package handlers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/TeamUP-2025/TeamUp-Backend/services"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/github"
)

type AuthHandler struct {
	config       *oauth2.Config
	jwtSecret    []byte
	githubSerice *services.GithubService
	databaseUrl string
}

func NewAuthHandler(clientID, 
	clientSecret string, 
	jwtSecret string, 
	databaseUrl string,
	) *AuthHandler {
	config := &oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		Scopes: []string{
			"repo",
			"user",
		},
		Endpoint: github.Endpoint,
	}

	return &AuthHandler{
		githubSerice: services.NewGithubService(clientID, clientSecret),
		config:       config,
		jwtSecret:    []byte(jwtSecret),
		databaseUrl: databaseUrl,
	}
}

func (h *AuthHandler) HandleGithubLogin(w http.ResponseWriter, r *http.Request) {
	url := h.config.AuthCodeURL("state")
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func (h *AuthHandler) HandleGithubCallback(w http.ResponseWriter, r *http.Request, ) {
	code := r.URL.Query().Get("code")
	if code == "" {
		http.Error(w, "Code parameter is required", http.StatusBadRequest)
		return
	}

	token, err := h.config.Exchange(r.Context(), code)
	if err != nil {
		http.Error(w, "Failed to exchange token", http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	acessToken := token.AccessToken
	user, _, err := services.GetUserProfile(acessToken)

	if err != nil {
		http.Error(w, "Failed to get user profile", http.StatusInternalServerError)
		return
	}

	followers := int32(0)
    if user.Followers != nil {
        followers = int32(*user.Followers)
    }

    following := int32(0)
    if user.Following != nil {
        following = int32(*user.Following)
    }

    publicRepos := int32(0)
    if user.PublicRepos != nil {
        publicRepos = int32(*user.PublicRepos)
    }

    totalPrivateRepos := int32(0)
    if user.TotalPrivateRepos != nil {
        totalPrivateRepos = int32(*user.TotalPrivateRepos)
    }

	userData := db.UpsertUseAndReturnUidAndNameParams{
        Login:            *user.Login,
        Name:             *user.Name,
        Avatar:           user.AvatarURL,
        Location:         user.Location,
        Token:            acessToken,
        Bio:             user.Bio,
        Followers:       &followers,
        Following:       &following,
        PublicRepos:     &publicRepos,
        TotalPrivateRepos: &totalPrivateRepos,
        HtmlUrl:         user.HTMLURL,
    }

	data, err := db.UpsertUserQuery(userData, h.databaseUrl)

	if err != nil{
		http.Error(w, "Failed to upsert user data", http.StatusInternalServerError)
		return
	};

	// Create JWT token
	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"name":         user.Name,
		"login": 		user.Login,
		"uid": 			data.Uid,
		"exp":          time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := jwtToken.SignedString(h.jwtSecret)

	if err != nil {
		http.Error(w, "Failed to create JWT token", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    tokenString,
		Path:     "/",
		HttpOnly: true,
		Secure:   true, // ensure HTTPS in production
		SameSite: http.SameSiteNoneMode,
		Expires:  time.Now().Add(time.Hour * 24), // same duration as JWT expiration
	})

	http.Redirect(w, r, "http://localhost:3000", http.StatusSeeOther)
}
