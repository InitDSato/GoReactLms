package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// 設定を読み込む
	config.LoadConfig()

	// データベース接続を設定
	config.SetupDatabase()

	router := gin.Default()

	// CORSミドルウェアを設定
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// ルート設定
	routes.SetupCourseRoutes(router)
	routes.SetupUserRoutes(router)

	router.Run(":" + config.AppConfig.ServerPort)
}
