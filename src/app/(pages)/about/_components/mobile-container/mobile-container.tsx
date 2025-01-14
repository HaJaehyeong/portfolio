import Footer from '@/ui/footer/footer';
import AboutMobileContent from '../mobile-content/mobile-content';
import AboutMobileExplorer from '../mobile-explorer/mobile-explorer';
import AboutMobileShowcase from '../mobile-showcase/mobile-showcase';
import styles from './mobile-container.module.scss';
import {
  SHOWCASE_CODE_NEXT_JS,
  SHOWCASE_CODE_NEXT_JS_DETAIL,
  SHOWCASE_CODE_SCSS,
  SHOWCASE_CODE_SCSS_DETAIL,
} from '@/types/constants';

const AboutMobileContainer: React.FC = () => {
  return (
    <div className={styles['mobile']}>
      <div className={styles['mobile-container']}>
        <div className={styles['mobile-container__title']}>_about-me</div>
        <AboutMobileExplorer />
        <AboutMobileContent />

        <span className={styles['mobile-container__showcase-title']}>{'// Code snippet showcase:'}</span>
        <AboutMobileShowcase code={SHOWCASE_CODE_NEXT_JS} detail={SHOWCASE_CODE_NEXT_JS_DETAIL} />
        <AboutMobileShowcase code={SHOWCASE_CODE_SCSS} detail={SHOWCASE_CODE_SCSS_DETAIL} />
      </div>
      <Footer isShow={true} />
    </div>
  );
};

export default AboutMobileContainer;
