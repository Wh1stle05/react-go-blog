package about

import (
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func GetAboutMD(c *gin.Context) {
	// 获取静态文件目录路径，支持本地和Docker环境
	staticDir := os.Getenv("STATIC_DIR")
	if staticDir == "" {
		// 如果环境变量未设置，使用默认值
		staticDir = "static"
	}

	// 构建完整的文件路径
	filePath := filepath.Join(staticDir, "about", "about1.md")

	content, err := os.ReadFile(filePath)
	if err != nil {
		c.String(http.StatusInternalServerError, "无法读取文件: "+err.Error())
		return
	}

	c.String(http.StatusOK, string(content))
}
