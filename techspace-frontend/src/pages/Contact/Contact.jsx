import React, { useState } from 'react';
import styles from './Contact.module.css';
import PageContainer from '../../components/PageContainer/PageContainer.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import Body from '../../components/Body/Body.jsx';
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
    <Body className={styles.contact}>
      <PageContainer>
        <PageTitle>联系我</PageTitle>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>姓名：</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className={styles.label}>邮箱：</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className={styles.label}>留言：</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit">发送留言</button>
        </form>
      </PageContainer>  
    </Body>
  );
}

export default Contact;