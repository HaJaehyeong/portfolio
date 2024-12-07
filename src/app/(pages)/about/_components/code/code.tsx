import AboutCodeShowcase from '../code-showcase/code-showcase';
import styles from './code.module.scss';

const AboutCode: React.FC = () => {
  return (
    <div className={styles.codeWrapper}>
      <div className={styles.emptyTab} />
      <AboutCodeShowcase />
    </div>
  );
};

export default AboutCode;
