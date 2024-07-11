package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func SetupCourseRoutes(router *gin.Engine) {
	router.GET("/courses", controllers.GetCourses)
	router.POST("/courses", controllers.CreateCourse)
	router.PUT("/courses/:id", controllers.UpdateCourse)
	router.DELETE("/courses/:id", controllers.DeleteCourse)
}
