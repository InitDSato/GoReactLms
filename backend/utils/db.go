package utils

import (
	"backend/config"
	"backend/models"
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

var DB *gorm.DB

func SetupDatabase() {
	var err error
	DB, err = gorm.Open("postgres", "host="+config.AppConfig.DBHost+" port="+config.AppConfig.DBPort+" user="+config.AppConfig.DBUser+" dbname="+config.AppConfig.DBName+" password="+config.AppConfig.DBPassword+" sslmode=disable")
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	DB.AutoMigrate(&models.Course{})
}
