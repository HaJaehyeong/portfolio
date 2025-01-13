import CodeBox from '@/components/codebox/codebox';
import styles from './code-showcase.module.scss';
import AboutCodeShowcaseCodeBox from '../code-showcase-codebox/code-showcase-codebox';

const AboutCodeShowcase: React.FC = () => {
  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.title}>{'// Code snippet showcase:'}</div>
      <AboutCodeShowcaseCodeBox detail="helloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooohelloooooo">
        <CodeBox
          code={`const HelloComponent: React.FC = () => {
  return <>hello world!!</>
}
  
export default HelloComponent;`}
        />
      </AboutCodeShowcaseCodeBox>
      <AboutCodeShowcaseCodeBox detail="helloo">
        <CodeBox code='const hello: string = "world";' />
      </AboutCodeShowcaseCodeBox>
    </div>
  );
};

export default AboutCodeShowcase;
