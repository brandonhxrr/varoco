package users

import (
	"backend/models"
	"backend/server"
	"backend/utils"
	"context"
	"fmt"
	"net/http"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

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
func (ctrl *UsersController) CreateUser(env *server.Env, ctx *context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		var req createUserRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
			return
		}

		if err := utils.ValidateCreateUser(req.Name, req.Email, req.Password); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		usersCol := env.Db.Collection("users")
		email := strings.ToLower(strings.TrimSpace(req.Email))
		if err := utils.EnsureEmailAvailable(ctx, usersCol, email); err != nil {
			status := http.StatusInternalServerError
			if err.Error() == "email_taken" {
				status = http.StatusConflict
			}
			fmt.Println("Validation error:", err)
			c.JSON(status, gin.H{"error": err.Error()})
			return
		}

		passwordHash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to hash password"})
			return
		}

		now := time.Now().UTC()
		id := uuid.NewString()
		user := models.User{
			ID:            id,
			Name:          strings.TrimSpace(req.Name),
			Email:         email,
			PasswordHash:  string(passwordHash),
			WalletAddress: "",
			CreatedAt:     now,
			UpdatedAt:     now,
		}

		if _, err := usersCol.InsertOne(*ctx, user); err != nil {
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

func (ctrl *UsersController) GetUsers(env *server.Env, ctx *context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
		defer cancel()

		usersCol := env.Db.Collection("users")
		var users []models.User

		cursor, err := usersCol.Find(ctx, bson.M{})
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to retrieve users"})
			return
		}
		defer cursor.Close(ctx)

		if err = cursor.All(ctx, &users); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to parse users"})
			return
		}

		c.JSON(http.StatusOK, users)
	}
}

func (ctrl *UsersController) GetUserByID(env *server.Env, ctx *context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
		defer cancel()

		usersCol := env.Db.Collection("users")
		userID := c.Param("id")

		var user models.User
		err := usersCol.FindOne(ctx, bson.M{"_id": userID}).Decode(&user)
		if err != nil {
			if err == mongo.ErrNoDocuments {
				c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
				return
			}
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to retrieve user"})
			return
		}

		c.JSON(http.StatusOK, user)
	}
}

func (ctrl *UsersController) UpdateUser(env *server.Env, ctx *context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
		defer cancel()

		usersCol := env.Db.Collection("users")
		userID := c.Param("id")

		var req models.User
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
			return
		}

		req.UpdatedAt = time.Now().UTC()

		update := bson.M{"$set": req}
		result, err := usersCol.UpdateOne(ctx, bson.M{"_id": userID}, update)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to update user"})
			return
		}

		if result.MatchedCount == 0 {
			c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "user updated successfully"})
	}
}

func (ctrl *UsersController) DeleteUser(env *server.Env, ctx *context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(c.Request.Context(), 10*time.Second)
		defer cancel()

		usersCol := env.Db.Collection("users")
		userID := c.Param("id")

		result, err := usersCol.DeleteOne(ctx, bson.M{"_id": userID})
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to delete user"})
			return
		}

		if result.DeletedCount == 0 {
			c.JSON(http.StatusNotFound, gin.H{"error": "user not found"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "user deleted successfully"})
	}
}
