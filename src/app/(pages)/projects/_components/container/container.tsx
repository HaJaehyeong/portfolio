'use client';
import styles from './container.module.scss';
import ProjectsFilter from '../filter/filter';
import ProjectsTab from '../tab/tab';
import ProjectsCards from '../cards/cards';
import { Project } from '@/app/apis/projects/route';
import LoadingSpinner from '@/app/_components/loading-spinner/loading-spinner';
import useWindowSize from '@/hooks/useWindowSize';
import Footer from '@/ui/footer/footer';
import ProejctsMobileFilter from '../mobile-filter/mobile-filter';

type ProjectsContainer = {
  projects: Project[];
};

const ProjectsContainer: React.FC<ProjectsContainer> = ({ projects }) => {
  const { width } = useWindowSize();
  const isMobileSize = width <= 767;

  if (width === 0) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isMobileSize ? (
        <div className={styles['projects']}>
          <div className={styles['projects__title']}>_projects</div>
          <ProejctsMobileFilter />
          <Footer isShow={true} />
        </div>
      ) : (
        <>
          <ProjectsFilter />
          <div className={styles['projects']}>
            <ProjectsTab />
            <ProjectsCards projects={projects} />
          </div>
        </>
      )}
    </>
  );
};

export default ProjectsContainer;
