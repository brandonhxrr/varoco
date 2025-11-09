package controllers

import (
	"backend/server"

	"github.com/gin-gonic/gin"
)

type PaymentsController struct{}

func NewPaymentsController() *PaymentsController {
	return &PaymentsController{}
}

func (ctrl *PaymentsController) GetPaymentHistory(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *PaymentsController) CreatePayment(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *PaymentsController) PaymentsController(env *server.Env) func(*gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}
