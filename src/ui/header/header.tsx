'use client';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import useWindowSize from '@/hooks/useWindowSize';
import HeaderTab from '../header-tab/header-tab';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  const pathname = usePathname();
  const { width } = useWindowSize();

  // NOTE(hajae): tablet보다 작을 때만 메뉴아이콘 표시 위해
  const isTabletSize = width <= 1023;

  return (
    <div className={styles['header']}>
      <div className={styles['header__name']}>{name}</div>
      {isTabletSize ? <div></div> : <HeaderTab pathname={pathname} />}
    </div>
  );
};

export default Header;
