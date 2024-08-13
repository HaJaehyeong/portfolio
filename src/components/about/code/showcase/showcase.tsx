import AboutCodeShowcaseCodeBox from './codebox/codebox';
import styles from './showcase.module.scss';

const AboutCodeShowcase: React.FC = () => {
  return (
    <div className={styles.showcaseWrapper}>
      <div>// Code snippet showcase:</div>
      <AboutCodeShowcaseCodeBox code={<div>code</div>} />
      <AboutCodeShowcaseCodeBox code={<div>code</div>} />
    </div>
  );
};

export default AboutCodeShowcase;
