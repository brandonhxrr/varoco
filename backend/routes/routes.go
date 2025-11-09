package routes

import (
	"backend/controllers/donations"
	"backend/controllers/payments"
	"backend/controllers/users"
	"backend/server"

	"github.com/gin-gonic/gin"
)

func API_Routes(routerGroup *gin.Engine, env *server.Env) {
	usersRoutes(routerGroup.Group("/users"), env)
	paymentsRoutes(routerGroup.Group("/payments"), env)
	donationsRoutes(routerGroup.Group("/donations"), env)
}

func usersRoutes(routerGroup *gin.RouterGroup, env *server.Env) {
	usersCtrl := users.NewUsersController()
	routerGroup.POST("", usersCtrl.CreateUser(env))
	routerGroup.GET("", usersCtrl.GetUsers(env))
	routerGroup.GET("/:id", usersCtrl.GetUserByID(env))
	routerGroup.PUT("/:id", usersCtrl.UpdateUser(env))
	routerGroup.DELETE("/:id", usersCtrl.DeleteUser(env))
}

func paymentsRoutes(routerGroup *gin.RouterGroup, env *server.Env) {
	paymentsCtrl := payments.NewPaymentsController()
	routerGroup.POST("", paymentsCtrl.CreatePayment(env))
	routerGroup.GET("", paymentsCtrl.GetPaymentHistory(env))
}

func donationsRoutes(routerGroup *gin.RouterGroup, env *server.Env) {
	donationsCtrl := donations.NewDonationsController()
	routerGroup.POST("", donationsCtrl.CreateDonation(env))
	routerGroup.GET("", donationsCtrl.GetDonation(env))
	routerGroup.GET("/:id", donationsCtrl.GetDonationByID(env))
	routerGroup.PUT("/:id", donationsCtrl.UpdateDonation(env))
	routerGroup.DELETE("/:id", donationsCtrl.DeleteDonation(env))
}
