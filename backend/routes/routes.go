package routes

import (
	"backend/controllers"
	"backend/server"

	"github.com/gin-gonic/gin"
)

func API_Routes(apiGroup *gin.Engine, env *server.Env) {
	handler := controllers.New()
	apiGroup.GET("/ping", handler.PingController(env))
}

