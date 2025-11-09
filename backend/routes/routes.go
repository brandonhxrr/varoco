package routes

import (
	"backend/controllers/causes"
	"backend/controllers/donations"
	"backend/controllers/payments"
	"backend/controllers/users"
	"backend/server"
	"context"

	"github.com/gin-gonic/gin"
)

func API_Routes(routerGroup *gin.Engine, env *server.Env, ctx context.Context) {
	usersRoutes(routerGroup.Group("/users"), env, ctx)
	causesRoutes(routerGroup.Group("/causes"), env, ctx)
	paymentsRoutes(routerGroup.Group("/payments"), env, ctx)
	donationsRoutes(routerGroup.Group("/donations"), env, ctx)
}

func causesRoutes(routerGroup *gin.RouterGroup, env *server.Env, ctx context.Context) {
	causesCtrl := causes.NewCausesController()
	routerGroup.POST("", causesCtrl.CreateCause(env, ctx))
	routerGroup.GET("", causesCtrl.GetCauses(env, ctx))
	routerGroup.GET("/:id", causesCtrl.GetCauseByID(env, ctx))
}

func usersRoutes(routerGroup *gin.RouterGroup, env *server.Env, ctx context.Context) {
	usersCtrl := users.NewUsersController()
	routerGroup.POST("", usersCtrl.CreateUser(env, ctx))
	routerGroup.GET("", usersCtrl.GetUsers(env, ctx))
	routerGroup.GET("/:id", usersCtrl.GetUserByID(env, ctx))
	routerGroup.PUT("/:id", usersCtrl.UpdateUser(env, ctx))
	routerGroup.DELETE("/:id", usersCtrl.DeleteUser(env, ctx))
}

func paymentsRoutes(routerGroup *gin.RouterGroup, env *server.Env, ctx context.Context) {
	paymentsCtrl := payments.NewPaymentsController()
	routerGroup.POST("", paymentsCtrl.CreatePayment(env, ctx))
	routerGroup.GET("", paymentsCtrl.GetPaymentHistory(env, ctx))
}

func donationsRoutes(routerGroup *gin.RouterGroup, env *server.Env, ctx context.Context) {
	donationsCtrl := donations.NewDonationsController()
	routerGroup.POST("", donationsCtrl.CreateDonation(env, ctx))
	routerGroup.GET("", donationsCtrl.GetDonation(env, ctx))
	routerGroup.GET("/:id", donationsCtrl.GetDonationByID(env, ctx))
	routerGroup.PUT("/:id", donationsCtrl.UpdateDonation(env, ctx))
	routerGroup.DELETE("/:id", donationsCtrl.DeleteDonation(env, ctx))
}
