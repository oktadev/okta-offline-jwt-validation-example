package main

import (
	"net/http"
	"strings"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

var messages []string

func Messages(c *gin.Context) {
	if verify(c) {
		message := c.PostForm("message")
		messages = append(messages, message)
		c.JSON(http.StatusOK, gin.H{"messages": messages})
	}
}

func verify(c *gin.Context) bool {
	status := true
	token := c.Request.Header.Get("Authorization")
	if strings.HasPrefix(token, "Bearer ") {
		token = strings.TrimPrefix(token, "Bearer ")
	} else {
		c.String(http.StatusUnauthorized, "Unauthorized")
		status = false
	}
	return status
}

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./client", false)))
	r.POST("/api/messages", Messages)
	r.Run()
}
