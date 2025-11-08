import React from 'react';

function Blog() {
  return (
    <div className="blog">
      <h1>博客文章</h1>
      <div className="blog-content">
        <p>这里将显示所有博客文章的列表</p>
        <ul>
          <li>文章1：React入门指南</li>
          <li>文章2：Go语言基础</li>
          <li>文章3：项目开发经验分享</li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;