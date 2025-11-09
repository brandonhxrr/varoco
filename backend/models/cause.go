package models

type Cause struct {
	ID            string `bson:"_id"           json:"id"`
	Name          string `bson:"name"          json:"name"`
	Description   string `bson:"description"   json:"description"`
	// WalletAddress string `bson:"wallet_address" json:"wallet_address"`
	User          User   `bson:"user"          json:"user"`
	// opcional: caché del auth server descubierto
	AuthServer string `bson:"authServer,omitempty" json:"auth_server,omitempty"`
}
