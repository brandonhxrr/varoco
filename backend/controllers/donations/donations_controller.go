package donations

import (
	"backend/server"

	"github.com/gin-gonic/gin"
)

type DonationsController struct{}

func NewDonationsController() *DonationsController {
	return &DonationsController{}
}

func (ctrl *DonationsController) CreateDonation(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *DonationsController) GetDonation(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *DonationsController) GetDonationByID(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *DonationsController) UpdateDonation(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *DonationsController) DeleteDonation(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}
