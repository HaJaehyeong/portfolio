import { RiArrowDownSFill } from '@remixicon/react';
import styles from './explorer.module.scss';
import Accordion from './accordion/accordion';
import { accordions } from '@/types/constants';

type ExplorerProps = {
  activeNav: 'terminal' | 'user' | 'gamepad';
  subject: string;
};

const Explorer: React.FC<ExplorerProps> = ({ activeNav, subject }) => {
  const getAccodionList = () => {
    switch (activeNav) {
      case 'terminal':
        return accordions.terminals;
      case 'user':
        return accordions.users;
      case 'gamepad':
        return accordions.gamepads;
      default:
        return accordions.terminals;
    }
  };
  return (
    <div className={styles.explorer}>
      <div className={styles.subject}>
        <RiArrowDownSFill color="#fff" size={20} />
        <label className={styles.subjectText}>{subject}</label>
      </div>
      <div>
        <div className={styles.content}>
          <Accordion accordions={getAccodionList()} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
