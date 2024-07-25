'use client';
import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './page.module.scss';
import { useState } from 'react';

const AboutMe: React.FC = () => {
  const [activeNav, setActiveNav] = useState<'terminal' | 'user' | 'gamepad'>('terminal');

  const handleNavClick = (nav: 'terminal' | 'user' | 'gamepad') => {
    setActiveNav(nav);
  };

  return (
    <div className={styles.aboutMeWrapper}>
      <div className={styles.sideNav}>
        <TechnologyLogo
          icon="terminal"
          useHover
          active={activeNav === 'terminal'}
          onClick={() => handleNavClick('terminal')}
        />
        <TechnologyLogo icon="user" useHover active={activeNav === 'user'} onClick={() => handleNavClick('user')} />
        <TechnologyLogo
          icon="gamepad"
          useHover
          active={activeNav === 'gamepad'}
          onClick={() => handleNavClick('gamepad')}
        />
      </div>
    </div>
  );
};

export default AboutMe;
