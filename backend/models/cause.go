package models

type Cause struct {
	ID            string `bson:"_id"           json:"id"`
	Name          string `bson:"name"          json:"name"`
	WalletAddress string `bson:"walletAddress" json:"wallet_address"`
	User          string `bson:"user"          json:"user"`
	// opcional: caché del auth server descubierto
	AuthServer string `bson:"authServer,omitempty" json:"auth_server,omitempty"`
}
