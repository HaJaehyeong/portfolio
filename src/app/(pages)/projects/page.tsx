import styles from './page.module.scss';
import ProjectsContainer from './_components/container/container';
import { MOCK_PROJECTS } from '@/types/constants';

const Projects: React.FC = () => {
  // NOTE(hajae): github pages 정적 페이지 배포를 actions function을 사용하는게 아닌 상수 사용
  const res = MOCK_PROJECTS;

  return (
    <div className={styles['projects']}>
      <ProjectsContainer projects={res.projects} />
    </div>
  );
};

export default Projects;
