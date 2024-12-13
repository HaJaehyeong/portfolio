'use client';
import { RiArrowDownSFill } from '@remixicon/react';
import styles from './filter.module.scss';
import TechnologiesRow from '@/ui/technologies-row/technologies-row';
import { Enums } from '@/enums/enums';
import { TechCodesType } from '@/types/constants';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProjectFilterTechnologyState,
  removeProjectFilterTechnologyState,
} from '@/lib/features/project-filter-slice';
import { TechnologyEnum } from '@/enums/technology.enum';
import { RootState } from '@/lib/store';

const ProjectsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const technologies = useSelector((state: RootState) => state.projectFilterReducer.technologies);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, techName: TechnologyEnum['code']) => {
    e.target.checked
      ? dispatch(addProjectFilterTechnologyState(techName))
      : dispatch(removeProjectFilterTechnologyState(techName));
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
            checked={technologies.includes(value.code)}
            tech={value.code as TechCodesType}
            handleChange={(e) => handleChange(e, value.code)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
