import { Enums } from '@/enums/enums';
import Checkbox from '../checkbox/checkbox';
import TechnologyLogo from '../technologyLogo/technologyLogo';
import styles from './technologiesRow.module.scss';
import { TechCodesType } from '@/types/constants';

type TechnologiesRow = {
  tech: TechCodesType;
};

const TechnologiesRow: React.FC<TechnologiesRow> = ({ tech }) => {
  const targetTech = Enums.Technology.valueOf(tech);

  return (
    targetTech && (
      <div className={styles.technologiesRow}>
        <Checkbox checked />
        <div className={styles.technologiesRowTitle}>
          <TechnologyLogo icon={tech} size={24} />
          <span>{targetTech?.name}</span>
        </div>
      </div>
    )
  );
};

export default TechnologiesRow;
