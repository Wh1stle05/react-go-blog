import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // 导入 CSS Modules

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          TechSpace
        </Link>
        
        <div className={styles.navLinks}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            首页
          </Link>
          
          <Link 
            to="/blog" 
            className={`${styles.navLink} ${location.pathname === '/blog' ? styles.active : ''}`}
          >
            博客
          </Link>
          
          <Link 
            to="/about" 
            className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            关于
          </Link>
          
          <Link 
            to="/contact" 
            className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            联系
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;