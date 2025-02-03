import styles from './page.module.scss';
import { notFound } from 'next/navigation';
import Markdown from './_components/mark-down/mark-down';
import { MOCK_PROJECTS, MOCK_PROJECT_INFO_LIST } from '@/types/constants';

// NOTE(hajae): github pages 정적 페이지 배포를 위해 generateStaticParams를 추가
export async function generateStaticParams() {
  const projects = MOCK_PROJECTS;

  return (
    projects?.projects.map((project) => ({
      id: project.projectId.toString(),
    })) || []
  );
}

type ProjectProps = { params: Promise<{ id: string }> };

const Project: React.FC<ProjectProps> = async ({ params }) => {
  const id = (await params).id;
  const project = MOCK_PROJECT_INFO_LIST.find((project) => project.projectId === id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles['project']}>
      <div className={styles['project__title-wrapper']}>
        <div className={styles['project__title']}>
          <div className={styles['project__bar']} />
          <span className={styles['project__title--ko']}>{project.titleKo}</span>
          <span className={styles['project__title--en']}>
            {' // '}
            {project.titleEn}
          </span>
        </div>
      </div>
      {project.description && <Markdown description={project.description} />}
    </div>
  );
};

export default Project;
