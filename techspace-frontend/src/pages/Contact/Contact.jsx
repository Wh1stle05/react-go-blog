import React, { useState } from 'react';

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
    <div className="contact">
      <h1>联系我</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>姓名：</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>邮箱：</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>留言：</label>
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
    </div>
  );
}

export default Contact;