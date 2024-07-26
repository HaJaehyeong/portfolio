import { RiArrowRightSLine, RiFolder3Fill } from '@remixicon/react';
import styles from './accordion.module.scss';
import { AccordionType } from '@/types/constants';

type AccordionProps = {
  accordions: AccordionType[];
};

const Accordion: React.FC<AccordionProps> = ({ accordions }) => {
  return (
    <div className={styles.accordionWrapper}>
      {accordions.map((acc) => (
        <div key={acc.accordionName} className={styles.accordion}>
          <RiArrowRightSLine size={16} color={acc.isOpen ? 'var(--secondary-white)' : 'var(--secondary-gray)'} />
          <RiFolder3Fill size={16} color={acc.dirColor} />
          <label className={acc.isOpen ? styles.open : ''}>{acc.accordionName}</label>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
