'use client';
import Explorer from '@/components/about/explorer/explorer';
import styles from './page.module.scss';
import SideNav from '@/components/about/sideNav/sideNav';
import { useState } from 'react';

const AboutMe: React.FC = () => {
  const [activeNav, setActiveNav] = useState<'terminal' | 'user' | 'gamepad'>('terminal');
  const handleNavClick = (nav: 'terminal' | 'user' | 'gamepad') => {
    setActiveNav(nav);
  };

  const getSubject = () => {
    switch (activeNav) {
      case 'terminal':
        return 'professional-info';
      case 'user':
        return 'personal-info';
      case 'gamepad':
        return 'hobbies-info';
    }
  };

  return (
    <div className={styles.aboutMeWrapper}>
      <SideNav activeNav={activeNav} handleNavClick={handleNavClick} />
      <Explorer subject={getSubject()} />
    </div>
  );
};

export default AboutMe;
