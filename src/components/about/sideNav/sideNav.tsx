'use client';
import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './sideNav.module.scss';

type SideNavProps = {
  activeNav: 'terminal' | 'user' | 'gamepad';
  handleNavClick: (nav: 'terminal' | 'user' | 'gamepad') => void;
};

const SideNav: React.FC<SideNavProps> = ({ activeNav, handleNavClick }) => {
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
