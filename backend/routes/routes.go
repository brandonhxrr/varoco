package routes

import (
	"backend/controllers"
	"backend/server"

	"github.com/gin-gonic/gin"
)

func API_Routes(routerGroup *gin.Engine, env *server.Env) {
	users(routerGroup.Group("/users"), env)
	payments(routerGroup.Group("/payments"), env)
	donations(routerGroup.Group("/donations"), env)

	ping := controllers.NewPingController()
	routerGroup.GET("/ping", ping.PingController(env))

	// Route groups example
	group1(routerGroup.Group("group1"), env)
	group2(routerGroup.Group("group2"), env)
}

func users(routerGroup *gin.RouterGroup, env *server.Env) {
	usersController := controllers.NewUsersController()
	routerGroup.POST("", usersController.CreateUser(env))
	routerGroup.GET("", usersController.GetUsers(env))
	routerGroup.GET("/:id", usersController.GetUserByID(env))
	routerGroup.PUT("/:id", usersController.UpdateUser(env))
	routerGroup.DELETE("/:id", usersController.DeleteUser(env))
}

func payments(routerGroup *gin.RouterGroup, env *server.Env) {
	paymentsController := controllers.NewPaymentsController()
	routerGroup.POST("", paymentsController.CreatePayment(env))
	routerGroup.GET("", paymentsController.GetPaymentHistory(env))
}

func donations(routerGroup *gin.RouterGroup, env *server.Env) {
	donationsController := controllers.NewDonationsController()
	routerGroup.POST("", donationsController.CreateDonation(env))
	routerGroup.GET("", donationsController.GetDonation(env))
	routerGroup.GET("/:id", donationsController.GetDonationByID(env))
	routerGroup.PUT("/:id", donationsController.UpdateDonation(env))
	routerGroup.DELETE("/:id", donationsController.DeleteDonation(env))
}

func group1(routerGroup *gin.RouterGroup, env *server.Env) {
	panic("unimplemented")
}

func group2(routerGroup *gin.RouterGroup, env *server.Env) {
	panic("unimplemented")
}
