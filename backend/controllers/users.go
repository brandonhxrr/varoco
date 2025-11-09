package controllers

import (
	"backend/server"
	"context"
	"errors"
	"net/http"
	"regexp"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

// User represents the stored user document in MongoDB.
// IDs are UUIDv4 (string) to maintain consistency across potential polyglot services.
// WalletAddress is intentionally left empty at creation time because
// this initial registration flow targets users who DO NOT yet have an
// Open Payments / Interledger wallet. A later onboarding step will allow
// linking or provisioning a wallet address (or payment pointer) and possibly
// associating provider metadata.
type User struct {
	ID            string    `bson:"_id,omitempty" json:"id"`
	Name          string    `bson:"name" json:"name"`
	Email         string    `bson:"email" json:"email"`
	PasswordHash  string    `bson:"password_hash" json:"-"`
	WalletAddress string    `bson:"wallet_address" json:"wallet_address"`
	// Future fields for multi-ASE scenarios (commented out for now):
	// ProviderID string `bson:"provider_id,omitempty" json:"provider_id,omitempty"`
	// PaymentPointer string `bson:"payment_pointer,omitempty" json:"payment_pointer,omitempty"`
	CreatedAt time.Time `bson:"created_at" json:"created_at"`
	UpdatedAt time.Time `bson:"updated_at" json:"updated_at"`
}

// createUserRequest is the incoming payload for user registration.
type createUserRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// createUserResponse is the response sent back to the client after creating a user.
// WalletAddress will be an empty string until the user links or provisions one.
type createUserResponse struct {
	ID            string    `json:"id"`
	Name          string    `json:"name"`
	Email         string    `json:"email"`
	WalletAddress string    `json:"wallet_address"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

type UsersController struct{}

func NewUsersController() *UsersController {
	return &UsersController{}
}

// CreateUser handles user registration.
// Steps:
// 1. Validate input (name, email, password)
// 2. Ensure email uniqueness
// 3. Hash password with bcrypt
// 4. Persist user WITHOUT wallet address (reserved for later linking/provisioning)
// 5. Return sanitized user JSON
func (ctrl *UsersController) CreateUser(env *server.Env) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req createUserRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
			return
		}

		// Basic validations
		if err := validateCreateUser(req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
		defer cancel()

		usersCol := env.Db.Collection("users")

		// Enforce email uniqueness at application level (best-effort; consider adding a unique index later)
		email := strings.ToLower(strings.TrimSpace(req.Email))
		if err := ensureEmailAvailable(ctx, usersCol, email); err != nil {
			if errors.Is(err, mongo.ErrNoDocuments) {
				// available
			} else {
				status := http.StatusInternalServerError
				if err.Error() == "email_taken" {
					status = http.StatusConflict
				}
				c.JSON(status, gin.H{"error": mapError(err)})
				return
			}
		}

		// Hash password
		passwordHash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to hash password"})
			return
		}

		// Prepare user document (walletAddress intentionally empty)
		now := time.Now().UTC()
		id := uuid.NewString()
		user := User{
			ID:            id,
			Name:          strings.TrimSpace(req.Name),
			Email:         email,
			PasswordHash:  string(passwordHash),
			WalletAddress: "",
			CreatedAt:     now,
			UpdatedAt:     now,
		}

		if _, err := usersCol.InsertOne(ctx, user); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create user"})
			return
		}

		c.JSON(http.StatusCreated, createUserResponse{
			ID:            user.ID,
			Name:          user.Name,
			Email:         user.Email,
			WalletAddress: user.WalletAddress,
			CreatedAt:     user.CreatedAt,
			UpdatedAt:     user.UpdatedAt,
		})
	}
}

func (ctrl *UsersController) GetUsers(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) GetUserByID(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) UpdateUser(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) DeleteUser(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) UsersController(env *server.Env) func(*gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}

// validateCreateUser performs minimal validation for name, email, and password.
func validateCreateUser(req createUserRequest) error {
	name := strings.TrimSpace(req.Name)
	email := strings.ToLower(strings.TrimSpace(req.Email))
	password := req.Password

	if name == "" || len(name) < 2 {
		return errors.New("name must be at least 2 characters")
	}

	if !isValidEmail(email) {
		return errors.New("invalid email")
	}

	if len(password) < 8 {
		return errors.New("password must be at least 8 characters")
	}

	return nil
}

// isValidEmail validates format with a simple regex.
func isValidEmail(email string) bool {
	// Basic email regex; adjust as needed.
	var re = regexp.MustCompile(`^[^\s@]+@[^\s@]+\.[^\s@]+$`)
	return re.MatchString(email)
}

// ensureEmailAvailable checks if the email already exists.
func ensureEmailAvailable(ctx context.Context, col *mongo.Collection, email string) error {
	var existing bson.M
	err := col.FindOne(ctx, bson.M{"email": email}).Decode(&existing)
	if err == nil {
		return errors.New("email_taken")
	}
	if errors.Is(err, mongo.ErrNoDocuments) {
		return mongo.ErrNoDocuments
	}
	return err
}

// mapError maps internal errors to API-safe messages.
func mapError(err error) string {
	if err == nil {
		return ""
	}
	switch err.Error() {
	case "email_taken":
		return "email already registered"
	default:
		return "internal error"
	}
}
