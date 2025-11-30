import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // 导入 CSS Modules

function Header() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false); // 控制导航栏隐藏状态
  const [lastScrollY, setLastScrollY] = useState(0); // 记录上次滚动位置

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 如果向下滚动超过100px，隐藏导航栏
      if (currentScrollY > lastScrollY && currentScrollY > 700) {
        setIsHidden(true);
      } else {
        // 如果向上滚动，显示导航栏
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // 依赖 lastScrollY

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
      <nav className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          Wh1stle 的小站
        </Link>
        
        <div className={styles['nav-links']}>
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