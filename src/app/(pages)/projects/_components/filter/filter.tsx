import { RiArrowDownSFill } from '@remixicon/react';
import styles from './filter.module.scss';
import TechnologiesRow from '@/ui/technologiesRow/technologiesRow';
import { Enums } from '@/enums/enums';
import { TechCodesType } from '@/types/constants';

const ProjectsFilter: React.FC = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.subject}>
        <RiArrowDownSFill color="var(--secondary-white)" size={20} />
        <label className={styles.subjectText}>projects</label>
      </div>
      <div className={styles.techWrapper}>
        {Enums.Technology.techs.map((value) => (
          <TechnologiesRow key={value.code} tech={value.code as TechCodesType} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsFilter;
