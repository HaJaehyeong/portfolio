'use client';
import AboutExplorer from '@/components/about/explorer/explorer';
import styles from './page.module.scss';
import AboutSideNav from '@/components/about/sideNav/sideNav';
import AboutContent from '@/components/about/content/content';
import AboutCode from '@/components/about/code/code';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <AboutSideNav />
      <AboutExplorer />
      <AboutContent />
      <AboutCode />
    </div>
  );
};

export default AboutMe;
