import styles from './page.module.scss';
import SideNav from '@/components/about/sideNav/sideNav';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <SideNav />
      <div className={styles.explorer}></div>
    </div>
  );
};

export default AboutMe;
