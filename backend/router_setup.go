package main

import (
	"backend/routes"
	"backend/server"
	"log"

	"github.com/gin-gonic/gin"
)

func setupRouter(env *server.Env) *gin.Engine {
	r := gin.Default()

	log.Println("Setting up CORS middleware...")
	setupCors(r)

	log.Println("Registering application routes...")
	routes.API_Routes(r, env)

	return r
}
