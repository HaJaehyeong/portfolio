'use client';
import { RiCloseLine } from '@remixicon/react';
import styles from './tab.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const ProjectsTab: React.FC = () => {
  const tabs = useSelector((state: RootState) => state.projectFilterReducer.tabs);
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tab}>
        {tabs.length ? tabs.join('; ') + ';' : 'all;'}
        <RiCloseLine size={16} color="var(--secondary-gray)" />
      </div>
    </div>
  );
};

export default ProjectsTab;
