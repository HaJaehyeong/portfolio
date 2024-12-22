import { ChangeEvent, useEffect, useState } from 'react';
import styles from './mobile-filter.module.scss';
import { RiArrowDownSFill, RiArrowRightSFill } from '@remixicon/react';
import { Enums } from '@/enums/enums';
import TechnologiesRow from '@/ui/technologies-row/technologies-row';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { TechCodesType } from '@/types/constants';
import {
  addProjectFilterTechnologyState,
  removeProjectFilterTechnologyState,
} from '@/lib/features/project-filter-slice';
import { TechnologyEnum } from '@/enums/technology.enum';

const ProejctsMobileFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const technologies = useSelector((state: RootState) => state.projectFilterReducer.technologies);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, techName: TechnologyEnum['code']) => {
    e.target.checked
      ? dispatch(addProjectFilterTechnologyState(techName))
      : dispatch(removeProjectFilterTechnologyState(techName));
  };

  return (
    <div className={styles['mobile-filter']}>
      <div className={styles['mobile-filter__tab']}>
        <div className={styles['mobile-filter__tab__accordion']}>
          <div className={styles['mobile-filter__tab__accordion-title']} onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <RiArrowDownSFill color="var(--secondary-white)" size={20} />
            ) : (
              <RiArrowRightSFill color="var(--secondary-white)" size={20} />
            )}
            <span>projects</span>
          </div>
          {isOpen && (
            <div className={styles['mobile-filter__tab__accordion-directories']}>
              <div className={styles['mobile-filter__tab__accordion-directories__item']}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProejctsMobileFilter;
