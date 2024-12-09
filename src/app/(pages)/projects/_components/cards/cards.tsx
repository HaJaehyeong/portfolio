import styles from './cards.module.scss';
import Card from '@/ui/card/card';
import { Project } from '@/app/apis/projects/route';
import cardImage from '@/public/images/card-example.jpg';

type ProjectsCardsProps = {
  projects: Project[];
};

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ projects }) => {
  return (
    <div className={styles.cardsWrapper}>
      {projects.map((project: Project, index) => (
        <div key={project.id} className={styles['card-item']}>
          <label>
            Project {index + 1}
            <span className={styles['card-item__title']}>
              {' //'} {project.title}
            </span>
          </label>
          <Card image={cardImage} description={project.description}></Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
