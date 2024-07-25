'use client';
import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './sideNav.module.scss';
import { useState } from 'react';

const SideNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<'terminal' | 'user' | 'gamepad'>('terminal');

  const handleNavClick = (nav: 'terminal' | 'user' | 'gamepad') => {
    setActiveNav(nav);
  };

  return (
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
  );
};

export default SideNav;
