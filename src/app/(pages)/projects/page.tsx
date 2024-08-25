import styles from './page.module.scss';
import ProjectsFilter from './_components/filter/filter';
import ProjectsTab from './_components/tab/tab';
import Card from '@/ui/card/card';
import cardImage from '@/public/images/card-example.jpg';

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsWrapper}>
      <ProjectsFilter />
      <div className={styles.projects}>
        <ProjectsTab />
        <Card image={cardImage}></Card>
      </div>
    </div>
  );
};

export default Projects;
