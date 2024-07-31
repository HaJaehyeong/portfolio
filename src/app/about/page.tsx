'use client';
import AboutExplorer from '@/components/about/explorer/explorer';
import styles from './page.module.scss';
import AboutSideNav from '@/components/about/sideNav/sideNav';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <AboutSideNav />
      <AboutExplorer />
    </div>
  );
};

export default AboutMe;
