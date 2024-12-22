import Footer from '@/ui/footer/footer';
import AboutMobileContent from '../mobile-content/mobile-content';
import AboutMobileExplorer from '../mobile-explorer/mobile-explorer';
import AboutMobileShowcase from '../mobile-showcase/mobile-showcase';
import styles from './mobile-container.module.scss';

const AboutMobileContainer: React.FC = () => {
  return (
    <div className={styles['mobile-container']}>
      <div className={styles['mobile-container__title']}>_about-me</div>
      <AboutMobileExplorer />
      <AboutMobileContent />
      <AboutMobileShowcase />
      <Footer isShow={true} />
    </div>
  );
};

export default AboutMobileContainer;
