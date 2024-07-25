import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './page.module.scss';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <div className={styles.sideNav}>
        <TechnologyLogo icon="terminal" active />
        <TechnologyLogo icon="user" />
        <TechnologyLogo icon="gamepad" />
      </div>
    </div>
  );
};

export default AboutMe;
