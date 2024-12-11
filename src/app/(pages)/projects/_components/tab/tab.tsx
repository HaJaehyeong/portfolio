'use client';
import { RiCloseLine } from '@remixicon/react';
import styles from './tab.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { initProjectFilterState } from '@/lib/features/project-filter-slice';

const ProjectsTab: React.FC = () => {
  const dispatch = useDispatch();
  const technologies = useSelector((state: RootState) => state.projectFilterReducer.technologies);

  const handleCloseClick = () => {
    dispatch(initProjectFilterState());
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tab}>
        {technologies.length ? technologies.join('; ') + ';' : 'all;'}
        <RiCloseLine size={16} cursor={'pointer'} color="var(--secondary-gray)" onClick={handleCloseClick} />
      </div>
    </div>
  );
};

export default ProjectsTab;
