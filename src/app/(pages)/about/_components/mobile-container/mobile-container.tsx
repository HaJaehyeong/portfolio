import AboutMobileExplorer from '../mobile-explorer/mobile-explorer';
import styles from './mobile-container.module.scss';

const AboutMobileContainer: React.FC = () => {
  return (
    <div className={styles['mobile-container']}>
      <div className={styles['mobile-container__title']}>_about-me</div>
      <AboutMobileExplorer />
    </div>
  );
};

export default AboutMobileContainer;
