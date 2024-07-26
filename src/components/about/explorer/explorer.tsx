import { RiArrowDownSFill } from '@remixicon/react';
import styles from './explorer.module.scss';
import Accordion from './accordion/accordion';
import { accordions } from '@/types/constants';

type ExplorerProps = {
  subject: string;
};

const Explorer: React.FC<ExplorerProps> = ({ subject }) => {
  return (
    <div className={styles.explorer}>
      <div className={styles.subject}>
        <RiArrowDownSFill color="#fff" size={20} />
        <label className={styles.subjectText}>{subject}</label>
      </div>
      <div>
        <div className={styles.content}>
          <Accordion accordions={accordions} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
