'use client';
import styles from './cards.module.scss';
import Card from '@/ui/card/card';
import { Project } from '@/app/apis/projects/route';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

type ProjectsCardsProps = {
  projects: Project[];
};

const ProjectsCards: React.FC<ProjectsCardsProps> = ({ projects }) => {
  const technologies = useSelector((state: RootState) => state.projectFilterReducer.technologies);

  return (
    <div className={styles['cards']}>
      {projects
        .filter((project) => {
          if (technologies.length === 0) return true;
          return project.skills.some((skill) => technologies.includes(skill));
        })
        .map((project: Project, index) => (
          <div key={project.proejctId} className={styles['card-item']}>
            <label className={styles['card-item__title-wrapper']}>
              <span className={styles['card-item__title-no']}>Project {index + 1}</span>
              <span className={styles['card-item__title']}>
                {' //'} {project.title}
              </span>
            </label>
            <Card
              projectId={project.proejctId}
              imageSrc={project.imageSrc}
              mainSkill={project.mainSkill}
              description={project.description}
            ></Card>
          </div>
        ))}
    </div>
  );
};

export default ProjectsCards;
