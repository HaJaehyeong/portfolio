import { RiCloseLine } from '@remixicon/react';
import styles from './tab.module.scss';

const ProjectsTab: React.FC = () => {
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tab}>
        all;
        <RiCloseLine size={16} color="var(--secondary-gray)" />
      </div>
    </div>
  );
};

export default ProjectsTab;
