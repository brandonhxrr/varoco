package models

import "time"

// Donation represents a donation record in the database
type Donation struct {
	ID            string    `bson:"_id,omitempty" json:"id"`
	UserID        string    `bson:"user_id" json:"user_id"`
	CauseID       string    `bson:"cause_id" json:"cause_id"`
	Amount        float64   `bson:"amount" json:"amount"`
	CreatedAt     time.Time `bson:"created_at" json:"created_at"`
}

