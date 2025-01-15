import styles from './page.module.scss';
import { notFound } from 'next/navigation';
import fetchProjectInfo from './actions';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Markdown from './_components/mark-down/mark-down';

type ProjectProps = { params: Promise<{ id: string }> };

const Project: React.FC<ProjectProps> = async ({ params }) => {
  const id = (await params).id;
  const project = await fetchProjectInfo(id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles['project']}>
      <div className={styles['project__title-wrapper']}>
        <div className={styles['project__bar']} />
        <div className={styles['project__title']}>
          <span className={styles['project__title--ko']}>{project.titleKo}</span>
          <span className={styles['project__title--en']}>
            {' // '}
            {project.titleEn}
          </span>
        </div>
      </div>
      <hr />
      {project.description && <Markdown description={project.description} />}
    </div>
  );
};

export default Project;
