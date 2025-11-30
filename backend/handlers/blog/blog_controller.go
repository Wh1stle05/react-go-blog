package blog

import (
	"backend/services"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// BlogController 博客控制器
type BlogController struct {
	blogService services.BlogService
}

// NewBlogController 创建博客控制器实例
func NewBlogController() *BlogController {
	return &BlogController{
		blogService: services.NewBlogService(),
	}
}

// GetBlogs 获取博客列表
// @Summary 获取博客列表
// @Description 获取所有已发布的博客列表，不包含完整内容
// @Tags 博客
// @Accept json
// @Produce json
// @Success 200 {array} models.BlogListItem
// @Failure 500 {object} models.ErrorResponse
// @Router /api/blogs [get]
func (ctrl *BlogController) GetBlogs(c *gin.Context) {
	blogs, err := ctrl.blogService.GetAllBlogs()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"success": false,
			"message": "获取博客列表失败",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "获取博客列表成功",
		"data":    blogs,
	})
}

// GetBlogByID 根据ID获取博客详情
// @Summary 获取博客详情
// @Description 根据ID获取博客的完整内容，包括标题、内容、作者等信息
// @Tags 博客
// @Accept json
// @Produce json
// @Param id path int true "博客ID"
// @Success 200 {object} models.Blog
// @Failure 400 {object} models.ErrorResponse
// @Failure 404 {object} models.ErrorResponse
// @Failure 500 {object} models.ErrorResponse
// @Router /api/blogs/{id} [get]
func (ctrl *BlogController) GetBlogByID(c *gin.Context) {
	// 获取路径参数中的博客ID
	idStr := c.Param("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"success": false,
			"message": "无效的博客ID",
			"error":   "ID必须是整数",
		})
		return
	}

	// 调用服务层获取博客详情
	blog, err := ctrl.blogService.GetBlogByID(id)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"success": false,
			"message": "博客不存在",
			"error":   err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "获取博客详情成功",
		"data":    blog,
	})
}
