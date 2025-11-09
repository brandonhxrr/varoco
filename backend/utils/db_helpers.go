package utils

import (
	"context"
	"errors"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func EnsureEmailAvailable(ctx context.Context, col *mongo.Collection, email string) error {
	count, err := col.CountDocuments(ctx, bson.M{"email": email})
	if err != nil {
		return err
	}
	if count > 0 {
		return errors.New("email_taken")
	}
	return nil
}
