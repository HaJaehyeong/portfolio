import Project from '@/app/(pages)/project/[id]/page';
import Footer from '@/ui/footer/footer';
import Modal from '@/ui/modal/modal';

const ModalProject: React.FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  return (
    <Modal>
      <Project params={params} />
    </Modal>
  );
};

export default ModalProject;
