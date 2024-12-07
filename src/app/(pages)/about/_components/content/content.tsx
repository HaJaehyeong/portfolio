import AboutContentBody from '../content-body/content-body';
import styles from './content.module.scss';
import AboutContentTab from '../content-tab/content-tab';

const AboutContent: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <AboutContentTab />
      <AboutContentBody />
    </div>
  );
};

export default AboutContent;
