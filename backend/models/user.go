package models

import "time"

// User represents a user in the database with UUIDv4 as an identifier.
// WalletAddress is intentionally left empty at creation time.
type User struct {
	ID            string `bson:"_id,omitempty" json:"id"`
	Name          string `bson:"name" json:"name"`
	Email         string `bson:"email" json:"email"`
	PasswordHash  string `bson:"password_hash" json:"-"`
	WalletAddress string `bson:"wallet_address" json:"wallet_address"`
	// Future fields for multi-ASE scenarios (commented out for now):
	// ProviderID string `bson:"provider_id,omitempty" json:"provider_id,omitempty"`
	// PaymentPointer string `bson:"payment_pointer,omitempty" json:"payment_pointer,omitempty"`
	CreatedAt time.Time `bson:"created_at" json:"created_at"`
	UpdatedAt time.Time `bson:"updated_at" json:"updated_at"`
}
