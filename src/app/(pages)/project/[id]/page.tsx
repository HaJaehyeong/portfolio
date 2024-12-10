import styles from './page.module.scss';
import { notFound } from 'next/navigation';
import fetchProjectInfo from './actions';

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
        <div className={styles['project__title']}>
          <span className={styles['project__title--ko']}>정부지원 R&D SM과제</span>
          <span className={styles['project__title--en']}>
            {' // '}
            {project.title}
          </span>
        </div>
        <div className={styles['project__sub-title']}>
          <span>2024/04/03 ~ 2024/04/05</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Project;
