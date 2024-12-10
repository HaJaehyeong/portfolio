import Modal from '@/ui/modal/modal';

const ModalProject: React.FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
  const id = (await params).id;

  return <Modal>project!!! {id}</Modal>;
};

export default ModalProject;
