import styles from './page.module.scss';
import fetchProjects from './actions';
import ProjectsContainer from './_components/container/container';

const Projects: React.FC = async () => {
  const res = await fetchProjects();

  return (
    <div className={styles['projects']}>
      <ProjectsContainer projects={res.projects} />
    </div>
  );
};

export default Projects;
