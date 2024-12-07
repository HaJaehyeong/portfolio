'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import styles from './filter.module.scss';
import TechnologiesRow from '@/ui/technologies-row/technologies-row';
import { Enums } from '@/enums/enums';
import { TechCodesType } from '@/types/constants';
import { ChangeEvent } from 'react';
import { addProjectFilterTab, removeProjectFilterTab } from '@/lib/features/project-filter-slice';
import { useDispatch } from 'react-redux';

const ProjectsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, tabName: string) => {
    e.target.checked ? dispatch(addProjectFilterTab(tabName)) : dispatch(removeProjectFilterTab(tabName));
  };

  return (
    <div className={styles.filter}>
      <div className={styles.subject}>
        <RiArrowDownSFill color="var(--secondary-white)" size={20} />
        <label className={styles.subjectText}>projects</label>
      </div>
      <div className={styles.techWrapper}>
        {Enums.Technology.techs.map((value) => (
          <TechnologiesRow
            key={value.code}
            tech={value.code as TechCodesType}
            handleChange={(e) => handleChange(e, value.code)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
