import styles from './page.module.scss';
import ProjectsFilter from './_components/filter/filter';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsWrapper}>
      <ProjectsFilter />
    </div>
  );
};

export default Projects;
