package models

import "time"

// Payment represents a payment record in the database
type Payment struct {
	ID            string    `bson:"_id,omitempty" json:"id"`
	UserID        string    `bson:"user_id" json:"user_id"`
	Amount        float64   `bson:"amount" json:"amount"`
	Currency      string    `bson:"currency" json:"currency"`
	CreatedAt     time.Time `bson:"created_at" json:"created_at"`
}

