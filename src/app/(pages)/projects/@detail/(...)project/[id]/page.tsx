import Project from '@/app/(pages)/project/[id]/page';
import Modal from '@/ui/modal/modal';
import fetchProjects from '../../../actions';

export async function generateStaticParams() {
  const projects = await fetchProjects();

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
