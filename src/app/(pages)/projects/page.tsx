import styles from './page.module.scss';
import ProjectsFilter from './_components/filter/filter';
import ProjectsTab from './_components/tab/tab';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsWrapper}>
      <ProjectsFilter />
      <div className={styles.projects}>
        <ProjectsTab />
      </div>
    </div>
  );
};

export default Projects;
