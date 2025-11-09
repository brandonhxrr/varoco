package main

import (
	"backend/routes"
	"backend/server"
	"log"

	"github.com/gin-gonic/gin"
)

func setupRouter(env *server.Env) *gin.Engine {
	router := gin.Default()

	log.Println("Setting up CORS middleware...")
	setupCors(router)

	log.Println("Registering application routes...")
	routes.API_Routes(router, env)

	return router
}
