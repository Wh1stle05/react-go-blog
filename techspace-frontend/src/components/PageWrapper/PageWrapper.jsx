import styles from './PageWrapper.module.css';

export default function PageWrapper({ children }) {
  return (
    <div className={styles.fadeIn}>
      {children}
    </div>
  );
}
