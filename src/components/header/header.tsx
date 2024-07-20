'use client';
import { TABS } from '@/types/constants';
import HeaderText from '../headerText/headerText';
import styles from './header.module.scss';
import { useState } from 'react';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.name}>{name}</div>
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {TABS.map((tab, index) => (
            <HeaderText
              key={tab + index}
              text={tab}
              isSelected={tab === activeTab}
              handleClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        <HeaderText
          text={'contact-me'}
          isTab={false}
          isSelected={activeTab === 'contact-me'}
          handleClick={() => setActiveTab('contact-me')}
        />
      </div>
    </div>
  );
};

export default Header;
