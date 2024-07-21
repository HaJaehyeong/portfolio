import Header from '@/components/header/header';
import styles from './page.module.scss';
import Footer from '@/components/footer/footer';

const Home: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <Header name="Jaehyeong-Ha" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
