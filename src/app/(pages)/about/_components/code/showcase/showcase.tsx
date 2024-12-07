import CodeBox from '@/components/codebox/codebox';
import AboutCodeShowcaseCodeBox from './codebox/codebox';
import styles from './showcase.module.scss';

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
