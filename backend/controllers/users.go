package controllers

import (
	"backend/server"

	"github.com/gin-gonic/gin"
)

type UsersController struct{}

func NewUsersController() *UsersController {
	return &UsersController{}
}

func (ctrl *UsersController) DeleteUser(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) UpdateUser(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) GetUserByID(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) GetUsers(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) CreateUser(env *server.Env) gin.HandlerFunc {
	panic("unimplemented")
}

func (ctrl *UsersController) UsersController(env *server.Env) func(*gin.Context) {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}
