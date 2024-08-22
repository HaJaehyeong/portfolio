'use client';
import AboutCode from './_components/code/code';
import AboutContent from './_components/content/content';
import AboutExplorer from './_components/explorer/explorer';
import AboutSideNav from './_components/sideNav/sideNav';
import styles from './page.module.scss';

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
