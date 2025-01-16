import CodeBox from '@/components/codebox/codebox';
import styles from './code-showcase.module.scss';
import AboutCodeShowcaseCodeBox from '../code-showcase-codebox/code-showcase-codebox';
import {
  SHOWCASE_CODE_NEXT_JS,
  SHOWCASE_CODE_NEXT_JS_DETAIL,
  SHOWCASE_CODE_SCSS,
  SHOWCASE_CODE_SCSS_DETAIL,
} from '@/types/constants';

const AboutCodeShowcase: React.FC = () => {
  return (
    <div className={styles.showcaseWrapper}>
      <div className={styles.title}>{'// Code snippet showcase:'}</div>
      <AboutCodeShowcaseCodeBox detail={SHOWCASE_CODE_NEXT_JS_DETAIL}>
        <CodeBox code={SHOWCASE_CODE_NEXT_JS} />
      </AboutCodeShowcaseCodeBox>
      <AboutCodeShowcaseCodeBox detail={SHOWCASE_CODE_SCSS_DETAIL}>
        <CodeBox code={SHOWCASE_CODE_SCSS} />
      </AboutCodeShowcaseCodeBox>
    </div>
  );
};

export default AboutCodeShowcase;
