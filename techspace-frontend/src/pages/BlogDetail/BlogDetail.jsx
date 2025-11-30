import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogDetail.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Body from '../../components/Body/Body.jsx';
import { getBlogById } from '../../services/blogService.js';
import PageWrapper from '../../components/PageWrapper/PageWrapper.jsx';

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Body>
        <PageContainer>
          <PageTitle>加载中...</PageTitle>
          <div>正在加载博客内容...</div>
        </PageContainer>
      </Body>
    );
  }

  if (error) {
    return (
      <Body>
        <PageContainer>
          <PageTitle>错误</PageTitle>
          <div>{error}</div>
        </PageContainer>
      </Body>
    );
  }

  if (!blog) {
    return (
      <Body>
        <PageContainer>
          <PageTitle>博客不存在</PageTitle>
          <div>抱歉，您请求的博客不存在或已被删除。</div>
        </PageContainer>
      </Body>
    );
  }

  // 将Markdown内容转换为HTML（简单实现，实际项目中建议使用专门的Markdown解析库）
  const formatContent = (content) => {
    // 这里只是一个简单的示例，实际项目中应该使用marked或react-markdown等库
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index}>{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index}>{line.substring(4)}</h3>;
      } else if (line.startsWith('```')) {
        return <pre key={index}><code>{line.substring(3)}</code></pre>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  return (
    <PageWrapper>
      <Body>
        <PageContainer>
          <div className={styles.blogHeader}>
            <PageTitle>{blog.title}</PageTitle>
            <div className={styles.blogMeta}>
              <span>作者: {blog.author}</span>
              <span>发布时间: {new Date(blog.created_at).toLocaleDateString()}</span>
              <span>浏览量: {blog.view_count}</span>
            </div>
            <div className={styles.blogTags}>
              {blog.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={styles.blogContent}>
            {formatContent(blog.content)}
          </div>
        </PageContainer>
      </Body>
    </PageWrapper>
  );
}

export default BlogDetail;