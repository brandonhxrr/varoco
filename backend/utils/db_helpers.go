package utils

import (
	"context"
	"errors"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// EnsureEmailAvailable checks if the email already exists in the collection.
func EnsureEmailAvailable(ctx *context.Context, col *mongo.Collection, email string) error {
	var existing bson.M
	err := col.FindOne(*ctx, bson.M{"email": email}).Decode(&existing)
	if err == nil {
		return errors.New("email_taken")
	}
	if errors.Is(err, mongo.ErrNoDocuments) {
		return nil
	}
	return err
}

