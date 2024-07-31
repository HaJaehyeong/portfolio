'use client';
import { TABS } from '@/types/constants';
import HeaderText from '../headerText/headerText';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  const pathname = usePathname();

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.name}>{name}</div>
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {TABS.map((tab, index) => (
            <Link href={tab.pathname} key={tab.tabName + index}>
              <HeaderText text={tab.tabName} isSelected={tab.pathname === pathname} />
            </Link>
          ))}
        </div>
        <HeaderText text={'contact-me'} isTab={false} isSelected={pathname === 'contact'} />
      </div>
    </div>
  );
};

export default Header;
