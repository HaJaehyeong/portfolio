import styles from './loading-spinner.module.scss';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles['loading']}>
      <div className={styles['loading__loader']}></div>
    </div>
  );
};

export default LoadingSpinner;
