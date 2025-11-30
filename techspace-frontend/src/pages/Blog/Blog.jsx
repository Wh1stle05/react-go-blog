import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Card from '../../components/Card/Card.jsx';
import Body from '../../components/Body/Body.jsx';
import { getBlogs } from '../../services/blogService.js';
import PageWrapper from '../../components/PageWrapper/PageWrapper.jsx';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <PageWrapper>
        <Body>
          <PageContainer>
            <PageTitle>博客文章</PageTitle>
            <div>加载中...</div>
          </PageContainer>
        </Body>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <Body>
          <PageContainer>
            <PageTitle>博客文章</PageTitle>
            <div>错误: {error}</div>
          </PageContainer>
        </Body>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Body>
        <PageContainer>
          <PageTitle>博客文章</PageTitle>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`} className={styles.blogLink}>
              <Card
                title={blog.title}
                items={[
                  blog.summary,
                  `作者: ${blog.author} | 浏览量: ${blog.view_count}`
                ]}
              />
            </Link>
          ))}
        </div>
      </PageContainer>
    </Body>
  </PageWrapper>
  );
}

export default Blog;