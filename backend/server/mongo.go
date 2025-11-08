package server

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Env struct {
	Db *mongo.Database
}

// NewEnvFromEnvVars connects to MongoDB using environment variables and returns an Env.
// It supports both authenticated and unauthenticated setups.
// Required: DB_HOST, DB_PORT, DB_NAME
// Optional: DB_USER, DB_PASSWORD
func NewEnvFromEnvVars(ctx context.Context) (*Env, error) {
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")
	user := os.Getenv("DB_USER")
	pass := os.Getenv("DB_PASSWORD")

	if host == "" || port == "" || dbName == "" {
		return nil, fmt.Errorf("missing required database environment variables")
	}

	var uri string
	if user == "" || pass == "" {
		log.Println("Database credentials not provided, attempting connection without authentication")
		uri = fmt.Sprintf("mongodb://%s:%s/", host, port)
	} else {
		uri = fmt.Sprintf("mongodb://%s:%s@%s:%s/", user, pass, host, port)
	}

	clientOptions := options.Client().ApplyURI(uri)
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		return nil, fmt.Errorf("error connecting to MongoDB: %w", err)
	}

	return &Env{Db: client.Database(dbName)}, nil
}
