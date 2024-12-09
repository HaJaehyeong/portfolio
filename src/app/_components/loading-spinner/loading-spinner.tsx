import styles from './loading-spinner.module.scss';

const LoadingSpinner: React.FC = () => {
  // NOTE(hajae): BEM 방법론으로 스타일 정의 (이후 작성된 코드부터 적용)
  return (
    <div className={styles['loading']}>
      <div className={styles['loading__loader']}></div>
    </div>
  );
};

export default LoadingSpinner;
