package causes

import (
	"backend/models"
	"backend/server"
	"context"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type CausesController struct{}

func NewCausesController() *CausesController {
	return &CausesController{}
}

func (c *CausesController) CreateCause(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Example input:
		// {
		//   "name": "Cause name",
		//   "description": "Detailed description of the cause",
		//   "user": {
		//       "id": "user-uuid",
		//       "name": "User Name",
		//       "email": "email@example.com",
		//       "wallet_address": "user-wallet-address",
		//       "created_at": "2025-01-01T00:00:00Z",
		//       "updated_at": "2025-01-01T00:00:00Z"
		//   },
		// }
		var cause models.Cause
		if err := c.ShouldBindJSON(&cause); err != nil {
			c.JSON(400, gin.H{"error": "Invalid input"})
			return
		}

		cause.ID = uuid.NewString()
		if _, err := env.Db.Collection("causes").InsertOne(ctx, cause); err != nil {
			c.JSON(500, gin.H{"error": "Failed to create cause", "details": err.Error()})
			return
		}

		c.JSON(201, cause.ID)
	}
}

func (c *CausesController) GetCauses(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "GetCauses endpoint placeholder"})
	}
}

func (c *CausesController) GetCauseByID(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "GetCauseByID endpoint placeholder"})
	}
}
