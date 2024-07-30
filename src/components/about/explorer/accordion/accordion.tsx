import { RiArrowDownSLine, RiArrowRightSLine, RiFolder3Fill, RiMarkdownFill } from '@remixicon/react';
import styles from './accordion.module.scss';
import { AccordionType } from '@/types/constants';

type AccordionProps = {
  accordion: AccordionType;
  handleAccordionClick: (accordionId: number) => void;
  handleToggleClick: (accordionId: number, toggleId: number) => void;
};

const Accordion: React.FC<AccordionProps> = ({ accordion, handleAccordionClick, handleToggleClick }) => {
  return (
    <div className={styles.accordionWrapper}>
      <div
        key={accordion.accordionName + accordion.accordionId}
        className={styles.accordion}
        onClick={() => handleAccordionClick(accordion.accordionId)}
      >
        {accordion.isOpen ? (
          <RiArrowDownSLine size={16} color="var(--secondary-white)" />
        ) : (
          <RiArrowRightSLine size={16} color="var(--secondary-gray)" />
        )}
        <RiFolder3Fill size={16} color={accordion.dirColor} />
        <label className={accordion.isOpen ? styles.open : ''}>{accordion.accordionName}</label>
      </div>
      {accordion.isOpen &&
        accordion.toggles &&
        accordion.toggles.map((toggle) => (
          <div className={styles.toggle} onClick={() => handleToggleClick(accordion.accordionId, toggle.toggleId)}>
            <RiMarkdownFill size={16} color="var(--secondary-gray)" />
            <label className={toggle.isOpen ? styles.open : ''}>{toggle.toggleName}</label>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
