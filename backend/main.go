package main

import (
	"backend/server"
	"context"
	"github.com/joho/godotenv"
	"log"
	"os"
	"time"
)

func main() {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	// Initialize environment (Mongo connection)
	env, err := server.NewEnvFromEnvVars(ctx)
	if err != nil {
		log.Fatalf("Failed to initialize environment: %v", err)
	}

	// Setup and create the Gin router
	r := setupRouter(env, ctx)
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("Unable to start server: Required configuration missing")
	}

	log.Printf("Starting server on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
