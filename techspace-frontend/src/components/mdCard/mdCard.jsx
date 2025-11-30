import styles from './mdCard.module.css';


export default function MdCard({ children }) {
  return (
    <div className={styles.MdCard}>
      {children}
    </div>
  );
}