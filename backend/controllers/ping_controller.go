package controllers

import (
	"backend/server"

	"github.com/gin-gonic/gin"
)

type PingHandler struct{}

func New() *PingHandler {
	return &PingHandler{}
}

func (h *PingHandler) PingController(env *server.Env) func(*gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}
