package payments

import (
	"backend/server"
	"context"

	"github.com/gin-gonic/gin"
)

type PaymentsController struct{}

func NewPaymentsController() *PaymentsController {
	return &PaymentsController{}
}

func (ctrl *PaymentsController) CreatePayment(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		var paymentRequest struct {
			Amount   float64 `json:"amount" binding:"required"`
			Currency string  `json:"currency" binding:"required"`
			Receiver string  `json:"receiver" binding:"required"`
		}

		if err := c.ShouldBindJSON(&paymentRequest); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		// Simulate payment creation logic
		payment := map[string]any{
			"id":       "12345",
			"amount":   paymentRequest.Amount,
			"currency": paymentRequest.Currency,
			"receiver": paymentRequest.Receiver,
		}

		c.JSON(201, gin.H{"payment": payment})
	}
}

func (ctrl *PaymentsController) GetPaymentHistory(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		userID := c.Query("user_id")
		if userID == "" {
			c.JSON(400, gin.H{"error": "user_id is required"})
			return
		}

		// Simulate fetching payment history
		payments := []map[string]any{
			{"id": "12345", "amount": 100.0, "currency": "USD", "receiver": "john.doe", "user_id": userID},
			{"id": "67890", "amount": 200.0, "currency": "USD", "receiver": "jane.doe", "user_id": userID},
		}

		c.JSON(200, gin.H{"payments": payments})
	}
}

func (ctrl *PaymentsController) PaymentsController(env *server.Env) func(*gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}
