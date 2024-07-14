import TechnologyLogo from '@/components/technologyLogo/technologyLogo';
import styles from './page.module.scss';
import HeaderText from '@/components/headerText/headerText';

const Home: React.FC = () => {
  return (
    <>
      <HeaderText text="about-me" isSelected={true} />
      <HeaderText text="projects" isSelected={false} />
    </>
  );
};

export default Home;
