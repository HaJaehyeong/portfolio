import Project from '@/app/(pages)/project/[id]/page';
import Modal from '@/ui/modal/modal';
import { MOCK_PROJECTS } from '@/types/constants';

// NOTE(hajae): github pages 정적 페이지 배포를 위해 generateStaticParams를 추가
export async function generateStaticParams() {
  const projects = MOCK_PROJECTS;

  return (
    projects?.projects.map((project) => ({
      id: project.projectId.toString(),
    })) || []
  );
}

const ModalProject: React.FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  return (
    <Modal>
      <Project params={params} />
    </Modal>
  );
};

export default ModalProject;
