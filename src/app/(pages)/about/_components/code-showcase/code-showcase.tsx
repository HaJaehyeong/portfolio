import CodeBox from '@/components/codebox/codebox';
import styles from './code-showcase.module.scss';
import AboutCodeShowcaseCodeBox from '../code-showcase-codebox/code-showcase-codebox';

const AboutCodeShowcase: React.FC = () => {
  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.title}>{'// Code snippet showcase:'}</div>
      <AboutCodeShowcaseCodeBox detail="helloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooo">
        <CodeBox />
      </AboutCodeShowcaseCodeBox>
      <AboutCodeShowcaseCodeBox detail="helloo">
        <CodeBox />
      </AboutCodeShowcaseCodeBox>
    </div>
  );
};

export default AboutCodeShowcase;
