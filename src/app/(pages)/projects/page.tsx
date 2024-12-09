import styles from './page.module.scss';
import ProjectsFilter from './_components/filter/filter';
import ProjectsTab from './_components/tab/tab';
import ProjectsCards from './_components/cards/cards';
import fetchProjects from './actions';

const Projects: React.FC = async () => {
  const res = await fetchProjects();

  return (
    <div className={styles.projectsWrapper}>
      <ProjectsFilter />
      <div className={styles.projects}>
        <ProjectsTab />
        <ProjectsCards />
      </div>
    </div>
  );
};

export default Projects;
