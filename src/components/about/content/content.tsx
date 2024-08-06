import AboutContentBody from './body/body';
import styles from './content.module.scss';
import AboutContentTab from './tab/tab';

const AboutContent: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <AboutContentTab />
      <AboutContentBody />
    </div>
  );
};

export default AboutContent;
