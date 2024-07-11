package config

import (
	"backend/models"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/spf13/viper"
)

type Config struct {
	DBHost     string
	DBPort     string
	DBUser     string
	DBPassword string
	DBName     string
	ServerPort string
}

var AppConfig Config
var DB *gorm.DB

func LoadConfig() {
	// .envファイルの読み込み
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// 環境変数から設定を読み込む
	AppConfig.DBHost = os.Getenv("DB_HOST")
	AppConfig.DBPort = os.Getenv("DB_PORT")
	AppConfig.DBUser = os.Getenv("DB_USER")
	AppConfig.DBPassword = os.Getenv("DB_PASSWORD")
	AppConfig.DBName = os.Getenv("DB_NAME")

	// YAMLファイルから設定を読み込む
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("Error reading config file: %v", err)
	}

	AppConfig.ServerPort = viper.GetString("server.port")
}

func SetupDatabase() {
	var err error
	dsn := "host=" + AppConfig.DBHost + " port=" + AppConfig.DBPort + " user=" + AppConfig.DBUser + " dbname=" + AppConfig.DBName + " password=" + AppConfig.DBPassword + " sslmode=disable"
	DB, err = gorm.Open("postgres", dsn)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	DB.AutoMigrate(&models.User{}, &models.Course{})
}
