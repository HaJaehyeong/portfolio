import { RiArrowDownSFill, RiMailFill, RiPhoneFill } from '@remixicon/react';
import styles from './explorer.module.scss';
import { MY_EMAIL, MY_PHONE } from '@/types/constants';
import ExplorerContentComponent from '../explorer-content/explorer-content';

const AboutExplorer: React.FC = () => {
  return (
    <div className={styles.explorer}>
      <ExplorerContentComponent />
      <div>
        <div className={styles.contactMe}>
          <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          <label className={styles.contactMeSubject}>contact me</label>
        </div>
        <div className={styles.contactMeInfo}>
          <div className={styles.info}>
            <RiMailFill color="var(--secondary-gray)" size={18} />
            <label>{MY_EMAIL}</label>
          </div>
          <div className={styles.info}>
            <RiPhoneFill color="var(--secondary-gray)" size={18} />
            <label>{MY_PHONE}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExplorer;
