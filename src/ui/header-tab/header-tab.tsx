import { TABS } from '@/types/constants';
import styles from './header-tab.module.scss';
import Link from 'next/link';
import HeaderText from '../header-text/header-text';

type HeaderTabProps = {
  pathname: string;
};

const HeaderTab: React.FC<HeaderTabProps> = ({ pathname }) => {
  return (
    <div className={styles['header-tab']}>
      <div className={styles['header-tab__tabs']}>
        {TABS.map((tab, index) => (
          <Link href={tab.pathname} key={tab.tabName + index}>
            <HeaderText text={tab.tabName} isSelected={tab.pathname === pathname} />
          </Link>
        ))}
      </div>
      <Link href={'/contact'}>
        <HeaderText text={'contact-me'} isTab={false} isSelected={pathname === 'contact'} />
      </Link>
    </div>
  );
};

export default HeaderTab;
