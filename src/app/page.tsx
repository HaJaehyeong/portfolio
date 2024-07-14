import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './page.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <TechnologyLogo icon="react" />
      <TechnologyLogo icon="html5" />
      <TechnologyLogo icon="angular" size={50} />
    </>
  );
};

export default Home;
