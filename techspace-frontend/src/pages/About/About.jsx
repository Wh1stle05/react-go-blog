import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './About.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import MdCard from '../../components/mdCard/mdCard.jsx';
import PageWrapper from '../../components/PageWrapper/PageWrapper.jsx';
function About() {
  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/about-md') // 后端接口
      .then(res => res.text())
      .then(text => setMdContent(text))
      .catch(err => console.error('Failed to fetch markdown:', err));
  }, []);

  return (
    <PageWrapper>
      <div className={styles.about}>
        <PageContainer>
          <PageTitle>关于我</PageTitle>
          <MdCard>
            <div className="markdown-content">
            
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {mdContent || '加载中...'}
              </ReactMarkdown>
            </div>
          </MdCard>
        </PageContainer>
      </div>
    </PageWrapper>
  );
}

export default About;