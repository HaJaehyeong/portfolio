'use client';
import TechnologyLogo from '@/ui/technology-logo/technology-logo';
import styles from './side-nav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setAboutExplorerType } from '@/lib/features/about-explorer-slice';

const AboutSideNav: React.FC = () => {
  const explorerType = useSelector((state: RootState) => state.aboutExplorerReducer.type);
  const dispatch = useDispatch();

  const handleNavClick = (nav: 'terminal' | 'user' | 'gamepad') => {
    dispatch(setAboutExplorerType(nav));
  };

  return (
    <div className={styles.sideNav}>
      <TechnologyLogo
        icon="terminal"
        useHover
        active={explorerType === 'terminal'}
        onClick={() => handleNavClick('terminal')}
      />
      <TechnologyLogo icon="user" useHover active={explorerType === 'user'} onClick={() => handleNavClick('user')} />
      <TechnologyLogo
        icon="gamepad"
        useHover
        active={explorerType === 'gamepad'}
        onClick={() => handleNavClick('gamepad')}
      />
    </div>
  );
};

export default AboutSideNav;
