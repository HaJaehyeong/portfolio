'use client';
import { Enums } from '@/enums/enums';
import Checkbox from '../checkbox/checkbox';
import TechnologyLogo from '../technology-logo/technology-logo';
import styles from './technologies-row.module.scss';
import { TechCodesType } from '@/types/constants';
import { ChangeEvent, useState } from 'react';

type TechnologiesRow = {
  tech: TechCodesType;
  checked?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TechnologiesRow: React.FC<TechnologiesRow> = ({ tech, checked = false, handleChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const targetTech = Enums.Technology.valueOf(tech);

  return (
    targetTech && (
      <div className={styles.technologiesRow}>
        <Checkbox
          checked={isChecked}
          handleChange={(e) => {
            if (handleChange) handleChange(e);
            setIsChecked(e.target.checked);
          }}
        />
        <div className={styles.technologiesRowTitle}>
          <TechnologyLogo icon={tech} size={24} />
          <span>{targetTech?.name}</span>
        </div>
      </div>
    )
  );
};

export default TechnologiesRow;
