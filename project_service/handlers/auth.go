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
	frontUrl string
	domainCookie string
}

func NewAuthHandler(clientID, 
	clientSecret string, 
	jwtSecret string, 
	databaseUrl string,
	frontUrl string,
	domainCookie string,
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
		frontUrl: frontUrl,
		domainCookie: domainCookie,
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
		fmt.Println("Failed to exchange token", err)
		http.Error(w, "Failed to exchange token", http.StatusInternalServerError)
		return
	}

	acessToken := token.AccessToken
	user, _, err := services.GetUserProfile(acessToken)

	fmt.Println(user)

	if err != nil {
		fmt.Println("Failed to get user profile", err)
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

	name := ""
	if user.Name != nil {
		name = *user.Name
	}

	lacation := ""
	if user.Location != nil {
		lacation = *user.Location
	}

	userData := db.UpsertUseAndReturnUidAndNameParams{
        Login:            *user.Login,
        Name:             name,
        Avatar:           user.AvatarURL,
        Location:         &lacation,
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
		fmt.Println("Failed to upsert user data", err)
		http.Error(w, "Failed to upsert user data", http.StatusInternalServerError)
		return
	};

	// Create JWT token
	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"name":         name,
		"login": 		*user.Login,
		"uid": 			data.Uid,
		"exp":          time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := jwtToken.SignedString(h.jwtSecret)

	if err != nil {
		fmt.Println("Failed to create JWT token", err)
		http.Error(w, "Failed to create JWT token", http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    tokenString,
		Path:     "/",
		HttpOnly: true,
		Secure:   true, // ensure HTTPS in production // does not have cert
		SameSite: http.SameSiteNoneMode,
		Domain:   h.domainCookie,
		Expires:  time.Now().Add(time.Hour * 24), // same duration as JWT expiration
	})

	http.Redirect(w, r, h.frontUrl, http.StatusSeeOther)
}
