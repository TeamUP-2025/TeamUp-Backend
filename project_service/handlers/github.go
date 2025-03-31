package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/TeamUP-2025/TeamUp-Backend/db"
	"github.com/TeamUP-2025/TeamUp-Backend/services"
	"github.com/golang-jwt/jwt/v5"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type GithubHandler struct {
	githubSerice *services.GithubService
	databaseUrl  string
}

func NewGithubHandler(
	clientID,
	clientSecret,
	databaseUrl string,
) *GithubHandler {

	return &GithubHandler{
		githubSerice: services.NewGithubService(clientID, clientSecret),
		databaseUrl:  databaseUrl,
	}
}

func (h *GithubHandler) GithubProfileHandler(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	claims := ctx.Value("token").(jwt.MapClaims)
	uid := claims["uid"].(string)

	// Convert string uid to UUID
	uuid := pgtype.UUID{}
	if err := uuid.Scan(uid); err != nil {
		respondInternalServerError(w, err)
		return
	}

	// Connect to database
	conn, err := pgx.Connect(ctx, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	defer conn.Close(ctx)

	queries := db.New(conn)

	// Try to get cached profile
	cachedUser, err := queries.GetUserProfile(ctx, uuid)
	if err == nil {
		// Return cached data if it exists and is fresh
		response := map[string]interface{}{
			"login":               cachedUser.Login,
			"name":                cachedUser.Name,
			"location":            cachedUser.Location,
			"avatar_url":          cachedUser.Avatar,
			"bio":                 cachedUser.Bio,
			"followers":           cachedUser.Followers,
			"following":           cachedUser.Following,
			"public_repos":        cachedUser.PublicRepos,
			"total_private_repos": cachedUser.TotalPrivateRepos,
			"html_url":            cachedUser.HtmlUrl,
		}
		userJson, err := json.Marshal(response)
		if err != nil {
			respondInternalServerError(w, err)
			return
		}
		w.Write(userJson)
		return
	}

	// If no fresh cache, get from GitHub and update
	accessToken, err := getTokenFromClaims(r, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	githubUser, _, err := services.GetUserProfile(accessToken)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	// Convert numeric values
	followers := int32(0)
	if githubUser.Followers != nil {
		followers = int32(*githubUser.Followers)
	}
	following := int32(0)
	if githubUser.Following != nil {
		following = int32(*githubUser.Following)
	}
	publicRepos := int32(0)
	if githubUser.PublicRepos != nil {
		publicRepos = int32(*githubUser.PublicRepos)
	}
	totalPrivateRepos := int32(0)
	if githubUser.TotalPrivateRepos != nil {
		totalPrivateRepos = int32(*githubUser.TotalPrivateRepos)
	}

	updatedUser, err := queries.UpdateUserProfile(ctx, db.UpdateUserProfileParams{
		Uid:               uuid,
		Name:              *githubUser.Name,
		Avatar:            githubUser.AvatarURL,
		Location:          githubUser.Location,
		Bio:               githubUser.Bio,
		Followers:         &followers,
		Following:         &following,
		PublicRepos:       &publicRepos,
		TotalPrivateRepos: &totalPrivateRepos,
		HtmlUrl:           githubUser.HTMLURL,
	})

	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	response := map[string]interface{}{
		"login":               updatedUser.Login,
		"name":                updatedUser.Name,
		"location":            updatedUser.Location,
		"avatar_url":          updatedUser.Avatar,
		"bio":                 updatedUser.Bio,
		"followers":           updatedUser.Followers,
		"following":           updatedUser.Following,
		"public_repos":        updatedUser.PublicRepos,
		"total_private_repos": updatedUser.TotalPrivateRepos,
		"html_url":            updatedUser.HtmlUrl,
	}

	userJson, err := json.Marshal(response)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.Write(userJson)
}

func (h *GithubHandler) GithubRecentRepoHandler(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	claims := ctx.Value("token").(jwt.MapClaims)
	uid := claims["uid"].(string)

	uuid := pgtype.UUID{}
	if err := uuid.Scan(uid); err != nil {
		respondInternalServerError(w, err)
		return
	}

	conn, err := pgx.Connect(ctx, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}
	defer conn.Close(ctx)

	queries := db.New(conn)

	// Try to get cached repos
	cachedRepos, err := queries.GetCachedRepos(ctx, uuid)
	if err == nil && len(cachedRepos) > 0 {
		repoJson, err := json.Marshal(cachedRepos)
		if err != nil {
			respondInternalServerError(w, err)
			return
		}
		w.Write(repoJson)
		return
	}

	// If no fresh cache, get from GitHub and update
	accessToken, err := getTokenFromClaims(r, h.databaseUrl)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	repos, _, err := services.GetUserRepository(accessToken)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	// Update repos in database
	for _, repo := range repos {
		star := int32(*repo.StargazersCount)
		fork := int32(*repo.ForksCount)

		// Convert GitHub's UpdatedAt to pgtype.Timestamptz
		var updatedAt pgtype.Timestamptz
		if repo.UpdatedAt != nil {
			updatedAt.Time = repo.UpdatedAt.Time
			updatedAt.Valid = true
		}

		_, err := queries.UpsertRepo(ctx, db.UpsertRepoParams{
			Uid:         uuid,
			Name:        *repo.Name,
			Url:         *repo.HTMLURL,
			Description: repo.Description,
			Star:        &star,
			Fork:        &fork,
			Language:    repo.Language,
			UpdatedAt:   updatedAt,
		})
		
		if err != nil {
			respondInternalServerError(w, err)
			return
		}
	}

	// Get top 4 repos by stars
	topRepos, err := queries.GetCachedRepos(ctx, uuid)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	repoJson, err := json.Marshal(topRepos)
	if err != nil {
		respondInternalServerError(w, err)
		return
	}

	w.Write(repoJson)
}
