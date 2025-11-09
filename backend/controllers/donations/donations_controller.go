package donations

import (
	"backend/server"
	"context"

	"github.com/gin-gonic/gin"
)

type DonationsController struct{}

func NewDonationsController() *DonationsController {
	return &DonationsController{}
}

func (ctrl *DonationsController) CreateDonation(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "CreateDonation mockup response",
		})
	}
}

func (ctrl *DonationsController) GetDonation(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "GetDonation mockup response",
		})
	}
}

func (ctrl *DonationsController) GetDonationByID(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "GetDonationByID mockup response",
		})
	}
}

func (ctrl *DonationsController) UpdateDonation(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "UpdateDonation mockup response",
		})
	}
}

func (ctrl *DonationsController) DeleteDonation(env *server.Env, ctx context.Context) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "DeleteDonation mockup response",
		})
	}
}
