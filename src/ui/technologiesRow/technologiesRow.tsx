import { Enums } from '@/enums/enums';
import Checkbox from '../checkbox/checkbox';
import TechnologyLogo from '../technologyLogo/technologyLogo';
import styles from './technologiesRow.module.scss';
import { TechCodesType } from '@/types/constants';

type TechnologiesRow = {
  tech: TechCodesType;
  checked?: boolean;
};

const TechnologiesRow: React.FC<TechnologiesRow> = ({ tech, checked = false }) => {
  const targetTech = Enums.Technology.valueOf(tech);

  return (
    targetTech && (
      <div className={styles.technologiesRow}>
        <Checkbox checked={checked} />
        <div className={styles.technologiesRowTitle}>
          <TechnologyLogo icon={tech} size={24} />
          <span>{targetTech?.name}</span>
        </div>
      </div>
    )
  );
};

export default TechnologiesRow;
