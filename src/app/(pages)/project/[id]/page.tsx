import fetchProjectInfo from './actions';

type ProjectProps = { params: Promise<{ id: string }> };

const Project: React.FC<ProjectProps> = async ({ params }) => {
  const id = (await params).id;
  const project = await fetchProjectInfo(id);

  return <>project Page! {project.description}</>;
};

export default Project;
