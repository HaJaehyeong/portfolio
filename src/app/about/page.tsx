'use client';
import Explorer from '@/components/about/explorer/explorer';
import styles from './page.module.scss';
import SideNav from '@/components/about/sideNav/sideNav';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <SideNav />
      <Explorer />
    </div>
  );
};

export default AboutMe;
