import { RiArrowDownSFill } from '@remixicon/react';
import styles from './explorer.module.scss';
import Accordion from './accordion/accordion';
import { ACCORDIONS, AccordionType } from '@/types/constants';
import { useEffect, useState } from 'react';

type ExplorerProps = {
  activeNav: 'terminal' | 'user' | 'gamepad';
  subject: string;
};

// TODO(hajae): refactoring
const Explorer: React.FC<ExplorerProps> = ({ activeNav, subject }) => {
  const [accordions, setAccordions] = useState<AccordionType[]>([]);

  useEffect(() => {
    switch (activeNav) {
      case 'terminal':
        return setAccordions(ACCORDIONS.terminals);
      case 'user':
        return setAccordions(ACCORDIONS.users);
      case 'gamepad':
        return setAccordions(ACCORDIONS.gamepads);
      default:
        return setAccordions(ACCORDIONS.terminals);
    }
  }, [activeNav]);

  const handleAccordionClick = (accordionId: number) => {
    const updatedAccordions = accordions.map((accordion) =>
      accordion.accordionId === accordionId
        ? { ...accordion, isOpen: true, toggles: accordion.toggles.map((toggle) => ({ ...toggle, isOpen: false })) }
        : { ...accordion, isOpen: false, toggles: accordion.toggles.map((toggle) => ({ ...toggle, isOpen: false })) }
    );
    setAccordions(updatedAccordions);
  };

  const handleToggleClick = (accordionId: number, toggleId: number) => {
    const updatedAccordions = accordions.map((accordion) =>
      accordion.accordionId === accordionId
        ? {
            ...accordion,
            isOpen: true,
            toggles: accordion.toggles.map((toggle) =>
              toggle.toggleId === toggleId ? { ...toggle, isOpen: true } : { ...toggle, isOpen: false }
            ),
          }
        : { ...accordion, isOpen: false, toggles: accordion.toggles.map((toggle) => ({ ...toggle, isOpen: false })) }
    );
    setAccordions(updatedAccordions);
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.subject}>
        <RiArrowDownSFill color="#fff" size={20} />
        <label className={styles.subjectText}>{subject}</label>
      </div>
      <div>
        <div className={styles.content}>
          <div className={styles.accordionsWrapper}>
            {accordions &&
              accordions.map((accordion) => (
                <Accordion
                  key={accordion.accordionId}
                  accordion={accordion}
                  handleAccordionClick={handleAccordionClick}
                  handleToggleClick={handleToggleClick}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
