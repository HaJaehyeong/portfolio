import styles from './code.module.scss';
import AboutCodeShowcase from './showcase/showcase';

const AboutCode: React.FC = () => {
  return (
    <div className={styles.codeWrapper}>
      <div className={styles.emptyTab} />
      <AboutCodeShowcase />
    </div>
  );
};

export default AboutCode;
