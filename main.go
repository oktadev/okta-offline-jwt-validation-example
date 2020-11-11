package main

import (
	"net/http"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

var messages []string

func Messages(c *gin.Context) {
	message := c.PostForm("message")
	messages = append(messages, message)
	c.JSON(http.StatusOK, gin.H{"messages": messages})
}

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./client", false)))
	r.POST("/api/messages", Messages)
	r.Run()
}
