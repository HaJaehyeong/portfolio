'use client';
import { Enums } from '@/enums/enums';
import Checkbox from '../checkbox/checkbox';
import TechnologyLogo from '../technology-logo/technology-logo';
import styles from './technologies-row.module.scss';
import { TechCodesType } from '@/types/constants';
import { ChangeEvent, useEffect, useState } from 'react';

type TechnologiesRowProps = {
  tech: TechCodesType;
  checked?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TechnologiesRow: React.FC<TechnologiesRowProps> = ({ tech, checked = false, handleChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const targetTech = Enums.Technology.valueOf(tech);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    targetTech && (
      <div className={styles['technologies-row']}>
        <Checkbox
          checked={isChecked}
          handleChange={(e) => {
            if (handleChange) handleChange(e);
            setIsChecked(e.target.checked);
          }}
        />
        <div className={styles['technologies-row__title']}>
          <TechnologyLogo icon={tech} size={24} useHover active={checked} />
          <span className={checked ? styles['technologies-row__title--active'] : ''}>{targetTech?.name}</span>
        </div>
      </div>
    )
  );
};

export default TechnologiesRow;
