'use client';
import { RiMenuLine } from '@remixicon/react';
import styles from './header-menu.module.scss';
import { useEffect, useState } from 'react';
import { TABS } from '@/types/constants';
import Link from 'next/link';
import Footer from '../footer/footer';

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <RiMenuLine className={styles['header-menu']} onClick={handleToggleMenu} />
      <div className={`${styles['pane']} ${isMenuOpen ? styles['show'] : ''}`}>
        <div className={styles['pane__wrapper']}>
          {TABS.map((tab, index) => (
            <Link href={tab.pathname} key={tab.tabName + index} onClick={handleCloseMenu}>
              <div className={styles['pane__item']}>_{tab.tabName}</div>
            </Link>
          ))}
          <Link href="/contact" onClick={handleCloseMenu}>
            <div className={styles['pane__item']}>_contact-me</div>
          </Link>
        </div>
        <div>
          <Footer isShow={true} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
