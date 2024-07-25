import Header from '@/components/header/header';
import styles from './page.module.scss';
import Footer from '@/components/footer/footer';
import Main from '@/components/main/main';

const Home: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <div className={styles.backgroundBlurs}>
          <div className={`${styles.position1} ${styles.green}`} />
          <div className={`${styles.position2} ${styles.green}`} />
          <div className={`${styles.position3} ${styles.blue}`} />
          <div className={`${styles.position4} ${styles.blue}`} />
        </div>
        <Header name="Jaehyeong-Ha 😎" />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
