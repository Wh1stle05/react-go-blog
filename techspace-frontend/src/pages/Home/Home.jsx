import React from 'react';

function Home() {
  return (
    <div className="home fade-in">
      <div className="page-container">
        <h1 className="page-title">欢迎来到我的技术博客</h1>
        <p className="page-subtitle">
          这里记录了我的技术学习历程、项目经验和心得体会。
          希望通过这个平台与大家分享知识，共同进步。
        </p>
        
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">最新文章</h3>
            <div className="card-content">
              <p>React Hooks 最佳实践</p>
              <p>Go 语言并发编程</p>
              <p>现代 CSS 布局技巧</p>
            </div>
          </div>
          
          <div className="card">
            <h3 className="card-title">技术栈</h3>
            <div className="card-content">
              <p>前端：React, TypeScript, Tailwind CSS</p>
              <p>后端：Go, Gin, MySQL</p>
              <p>工具：Git, Docker, Vite</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <a href="/blog" className="btn btn-primary">
            查看全部文章
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;