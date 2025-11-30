package services

import (
	"backend/models"
	"errors"
	"fmt"
	"sort"
	"time"
)

// BlogService 博客服务接口
type BlogService interface {
	GetAllBlogs() ([]models.BlogListItem, error)
	GetBlogByID(id int) (*models.Blog, error)
}

// blogService 博客服务实现
type blogService struct {
	blogs []models.Blog
}

// NewBlogService 创建博客服务实例
func NewBlogService() BlogService {
	// 初始化一些示例博客数据
	blogs := []models.Blog{
		{
			ID:          1,
			Title:       "React入门指南",
			Summary:     "这是一篇关于React入门的指南，介绍了React的基本概念、组件化开发、JSX语法等。",
			Content:     "# React入门指南\n\nReact是Facebook开发的用于构建用户界面的JavaScript库。本指南将带你从零开始学习React。\n\n## 1. React简介\n\nReact是一个用于构建用户界面的JavaScript库，特别适合构建单页应用程序。它采用组件化的开发模式，让UI开发变得更加模块化和可维护。\n\n## 2. 基本概念\n\n### 组件\n\nReact应用由组件构成，组件是可重用的代码块，每个组件管理自己的状态。\n\n```jsx\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n```\n\n### JSX\n\nJSX是一种JavaScript的语法扩展，它允许我们在JavaScript代码中编写类似HTML的代码。\n\n```jsx\nconst element = <h1>Hello, world!</h1>;\n```\n\n### Props和State\n\nProps是组件的输入，类似于函数参数。State是组件的内部状态，当状态改变时，组件会重新渲染。\n\n## 3. 环境搭建\n\n要开始React开发，你需要安装Node.js和npm。然后使用Create React App创建新项目：\n\n```bash\nnpx create-react-app my-app\ncd my-app\nnpm start\n```\n\n## 4. 总结\n\nReact是一个强大而灵活的前端框架，通过组件化的方式让UI开发更加简单和高效。希望这篇指南能帮助你入门React开发。",
			Author:      "张三",
			CoverImage:  "/images/react-bg.jpg",
			Tags:        []string{"React", "前端", "JavaScript"},
			ViewCount:   128,
			IsPublished: true,
			CreatedAt:   time.Now().AddDate(0, 0, -7),
			UpdatedAt:   time.Now().AddDate(0, 0, -7),
		},
		{
			ID:          2,
			Title:       "Go语言入门指南",
			Summary:     "这是一篇关于Go语言入门的指南，介绍了Go的基本语法、并发编程、标准库等。",
			Content:     "# Go语言入门指南\n\nGo是Google开发的开源编程语言，专为构建简单、可靠和高效的软件而设计。\n\n## 1. Go语言简介\n\nGo（又称Golang）是Google开发的一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。\n\n## 2. 基本语法\n\n### 变量声明\n\nGo语言有多种声明变量的方式：\n\n```go\n// 标准声明\nvar name string = \"张三\"\n\n// 类型推断\nvar age = 25\n\n// 短变量声明（只能在函数内使用）\nisStudent := true\n```\n\n### 函数\n\n```go\nfunc add(a, b int) int {\n    return a + b\n}\n\nfunc main() {\n    result := add(3, 5)\n    fmt.Println(result) // 输出: 8\n}\n```\n\n## 3. 并发编程\n\nGo语言的并发是其核心特性之一，通过goroutine和channel实现：\n\n```go\nfunc say(s string) {\n    for i := 0; i < 5; i++ {\n        time.Sleep(100 * time.Millisecond)\n        fmt.Println(s)\n    }\n}\n\nfunc main() {\n    go say(\"world\")\n    say(\"hello\")\n}\n```\n\n## 4. 标准库\n\nGo语言拥有丰富的标准库，包括：\n- net/http：HTTP客户端和服务器实现\n- encoding/json：JSON编码和解码\n- fmt：格式化I/O\n- os：操作系统接口\n\n## 5. 总结\n\nGo语言简洁、高效，特别适合构建网络服务和分布式系统。希望这篇指南能帮助你入门Go语言开发。",
			Author:      "李四",
			CoverImage:  "/images/go-bg.jpg",
			Tags:        []string{"Go", "后端", "编程语言"},
			ViewCount:   95,
			IsPublished: true,
			CreatedAt:   time.Now().AddDate(0, 0, -5),
			UpdatedAt:   time.Now().AddDate(0, 0, -5),
		},
		{
			ID:          3,
			Title:       "全栈开发最佳实践",
			Summary:     "分享全栈开发中的最佳实践，包括前后端分离、API设计、数据库优化等内容。",
			Content:     "# 全栈开发最佳实践\n\n全栈开发需要掌握前端和后端技术，本文将分享一些全栈开发的最佳实践。\n\n## 1. 前后端分离\n\n前后端分离是现代Web应用的主流架构模式，它有以下优势：\n- 前后端可以独立开发、部署\n- 提高开发效率\n- 便于团队协作\n\n## 2. RESTful API设计\n\n设计良好的API应该遵循RESTful原则：\n- 使用合适的HTTP方法（GET, POST, PUT, DELETE）\n- 使用名词而非动词作为资源路径\n- 返回适当的HTTP状态码\n\n## 3. 数据库设计\n\n良好的数据库设计是应用性能的基础：\n- 合理设计表结构\n- 创建适当的索引\n- 避免N+1查询问题\n\n## 4. 安全性考虑\n\n- 使用HTTPS加密传输\n- 实施身份验证和授权\n- 防止常见的安全漏洞（XSS, CSRF, SQL注入等）\n\n## 5. 性能优化\n\n- 前端：代码分割、懒加载、缓存策略\n- 后端：数据库优化、缓存、异步处理\n\n## 6. 总结\n\n全栈开发需要综合考虑多个方面，通过遵循最佳实践，可以构建出高质量、可维护的应用程序。",
			Author:      "王五",
			CoverImage:  "/images/fullstack-bg.jpg",
			Tags:        []string{"全栈开发", "最佳实践", "架构"},
			ViewCount:   156,
			IsPublished: true,
			CreatedAt:   time.Now().AddDate(0, 0, -3),
			UpdatedAt:   time.Now().AddDate(0, 0, -2),
		},
	}

	return &blogService{
		blogs: blogs,
	}
}

// GetAllBlogs 获取所有已发布的博客列表
func (s *blogService) GetAllBlogs() ([]models.BlogListItem, error) {
	var blogList []models.BlogListItem

	for _, blog := range s.blogs {
		if blog.IsPublished {
			blogList = append(blogList, models.BlogListItem{
				ID:          blog.ID,
				Title:       blog.Title,
				Summary:     blog.Summary,
				Author:      blog.Author,
				CoverImage:  blog.CoverImage,
				Tags:        blog.Tags,
				ViewCount:   blog.ViewCount,
				CreatedAt:   blog.CreatedAt,
			})
		}
	}

	// 按ID降序排列（ID大的在前面，ID小的在后面）
	sort.Slice(blogList, func(i, j int) bool {
		return blogList[i].ID > blogList[j].ID
	})

	return blogList, nil
}

// GetBlogByID 根据ID获取博客详情
func (s *blogService) GetBlogByID(id int) (*models.Blog, error) {
	for _, blog := range s.blogs {
		if blog.ID == id && blog.IsPublished {
			// 增加浏览次数
			blog.ViewCount++
			return &blog, nil
		}
	}

	return nil, errors.New(fmt.Sprintf("ID为%d的博客不存在或未发布", id))
}
