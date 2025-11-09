package routes

import (
	"backend/controllers"
	"backend/server"

	"github.com/gin-gonic/gin"
)

func API_Routes(apiGroup *gin.Engine, env *server.Env) {
	handler := controllers.New()
	apiGroup.GET("/ping", handler.PingController(env))

	// Route groups example
	grupo1(apiGroup.Group("grupo1"), env)
	grupo2(apiGroup.Group("grupo2"), env)
}

func grupo1(routerGroup *gin.RouterGroup, env *server.Env) {
	panic("unimplemented")
}

func grupo2(routerGroup *gin.RouterGroup, env *server.Env) {
	panic("unimplemented")
}
