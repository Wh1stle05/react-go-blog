import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>关于我</h1>
      <div className="about-content">
        <p>我是一名正在学习全栈开发的技术爱好者</p>
        <p>这个博客记录了我的学习历程和技术分享</p>
        <h3>技术栈</h3>
        <ul>
          <li>前端：React, JavaScript, HTML, CSS</li>
          <li>后端：Go, Gin框架</li>
          <li>数据库：MySQL/SQLite</li>
        </ul>
      </div>
    </div>
  );
}

export default About;