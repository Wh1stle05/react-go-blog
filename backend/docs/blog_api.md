# 博客API文档

## 概述

本文档描述了博客系统的API接口，包括获取博客列表和获取博客详情的功能。

## 基础信息

- 基础URL: `http://localhost:5000`
- 所有API返回JSON格式数据
- 所有API都支持CORS跨域请求

## API接口

### 1. 获取博客列表

**接口地址**: `GET /api/blogs`

**描述**: 获取所有已发布的博客列表，不包含完整内容

**请求参数**: 无

**响应示例**:
```json
{
  "success": true,
  "message": "获取博客列表成功",
  "data": [
    {
      "id": 1,
      "title": "React入门指南",
      "summary": "这是一篇关于React入门的指南，介绍了React的基本概念、组件化开发、JSX语法等。",
      "author": "张三",
      "cover_image": "/images/react-bg.jpg",
      "tags": ["React", "前端", "JavaScript"],
      "view_count": 128,
      "created_at": "2023-11-20T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Go语言入门指南",
      "summary": "这是一篇关于Go语言入门的指南，介绍了Go的基本语法、并发编程、标准库等。",
      "author": "李四",
      "cover_image": "/images/go-bg.jpg",
      "tags": ["Go", "后端", "编程语言"],
      "view_count": 95,
      "created_at": "2023-11-22T14:15:00Z"
    }
  ]
}
```

### 2. 获取博客详情

**接口地址**: `GET /api/blogs/{id}`

**描述**: 根据ID获取博客的完整内容，包括标题、内容、作者等信息

**请求参数**:
- `id` (路径参数): 博客ID，整数类型

**响应示例**:
```json
{
  "success": true,
  "message": "获取博客详情成功",
  "data": {
    "id": 1,
    "title": "React入门指南",
    "summary": "这是一篇关于React入门的指南，介绍了React的基本概念、组件化开发、JSX语法等。",
    "content": "# React入门指南\n\nReact是Facebook开发的用于构建用户界面的JavaScript库...",
    "author": "张三",
    "cover_image": "/images/react-bg.jpg",
    "tags": ["React", "前端", "JavaScript"],
    "view_count": 129,
    "is_published": true,
    "created_at": "2023-11-20T10:30:00Z",
    "updated_at": "2023-11-20T10:30:00Z"
  }
}
```

## 错误响应

当请求失败时，API会返回以下格式的错误响应：

```json
{
  "success": false,
  "message": "错误描述",
  "error": "详细错误信息"
}
```

常见错误码：
- `400`: 请求参数错误（如无效的博客ID）
- `404`: 资源不存在（如博客不存在）
- `500`: 服务器内部错误

## 前端调用示例

### 使用fetch获取博客列表

```javascript
fetch('http://localhost:5001/api/blogs')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('博客列表:', data.data);
      // 处理博客列表数据
    } else {
      console.error('获取博客列表失败:', data.message);
    }
  })
  .catch(error => {
    console.error('请求错误:', error);
  });
```

### 使用fetch获取博客详情

```javascript
const blogId = 1; // 博客ID
fetch(`http://localhost:5001/api/blogs/${blogId}`)
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('博客详情:', data.data);
      // 处理博客详情数据
    } else {
      console.error('获取博客详情失败:', data.message);
    }
  })
  .catch(error => {
    console.error('请求错误:', error);
  });
```

### 使用axios获取博客列表

```javascript
import axios from 'axios';

axios.get('http://localhost:5001/api/blogs')
  .then(response => {
    const { success, message, data } = response.data;
    if (success) {
      console.log('博客列表:', data);
      // 处理博客列表数据
    } else {
      console.error('获取博客列表失败:', message);
    }
  })
  .catch(error => {
    console.error('请求错误:', error);
  });
```

### 使用axios获取博客详情

```javascript
import axios from 'axios';

const blogId = 1; // 博客ID
axios.get(`http://localhost:5001/api/blogs/${blogId}`)
  .then(response => {
    const { success, message, data } = response.data;
    if (success) {
      console.log('博客详情:', data);
      // 处理博客详情数据
    } else {
      console.error('获取博客详情失败:', message);
    }
  })
  .catch(error => {
    console.error('请求错误:', error);
  });
```

## 注意事项

1. 当前版本使用内存存储，重启服务器后数据会重置
2. 每次获取博客详情时，浏览次数会自动增加
3. 所有时间均为UTC时间格式
4. 封面图片路径是相对路径，需要前端配合处理