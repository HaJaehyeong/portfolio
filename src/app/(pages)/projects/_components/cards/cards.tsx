import styles from './cards.module.scss';
import Card from '@/ui/card/card';
import { PROJECT_LIST, Project } from '@/types/constants';

const ProjectsCards: React.FC = () => {
  return (
    <div className={styles.cardsWrapper}>
      {PROJECT_LIST.map((project: Project) => (
        <div className={styles.cardItem}>
          <label>
            Project{project.projectId} // {project.title}
          </label>
          <Card image={project.image}></Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
