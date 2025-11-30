import React, { useState } from 'react';
import styles from './Contact.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Body from '../../components/Body/Body.jsx';
import PageWrapper from '../../components/PageWrapper/PageWrapper.jsx';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('感谢您的留言！我会尽快回复。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <Body>
        <PageContainer>
        <PageTitle>联系我</PageTitle>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>称呼：</label>
            <input className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="留下你的名字吧 😊"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>邮箱：<div className={styles.required}>*</div>
            </label>
            <input className={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="我将通过这个邮箱联系你"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>留言：<div className={styles.required}>*</div></label>
            <textarea className={styles.input}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="请留下您的留言..."
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>发送留言</button>
        </form>
      </PageContainer>  
    </Body>
  </PageWrapper>
  );
}

export default Contact;