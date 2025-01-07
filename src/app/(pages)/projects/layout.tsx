import LoadingSpinner from '@/app/_components/loading-spinner/loading-spinner';
import { Suspense } from 'react';

type ProjectsLayoutProps = {
  children: React.ReactNode;
  detail: React.ReactNode;
};

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children, detail }) => {
  // NOTE(hajae): fetch Projects를 위한 Suspense
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
      <div>{detail}</div>
    </Suspense>
  );
};

export default ProjectsLayout;
