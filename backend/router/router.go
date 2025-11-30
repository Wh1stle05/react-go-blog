package router

import (
	"backend/handlers/about"
	"backend/handlers/blog"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}
		c.Next()
	})
	
	// About MD 接口
	r.GET("/api/about-md", about.GetAboutMD)
	
	// 博客相关接口
	blogController := blog.NewBlogController()
	blogGroup := r.Group("/api/blogs")
	{
		blogGroup.GET("", blogController.GetBlogs)       // 获取博客列表
		blogGroup.GET("/:id", blogController.GetBlogByID) // 获取博客详情
	}

	return r

}
