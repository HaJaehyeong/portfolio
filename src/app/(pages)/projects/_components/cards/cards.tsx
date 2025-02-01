'use client';
import styles from './cards.module.scss';
import Card from '@/ui/card/card';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Project } from '@/types/constants';

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
          <div key={project.projectId} className={styles['card-item']}>
            <label className={styles['card-item__title-wrapper']}>
              <span className={styles['card-item__title-no']}>Project {index + 1}</span>
              <span className={styles['card-item__title']}>
                {' //'} {project.title}
              </span>
            </label>
            <Card
              projectId={project.projectId}
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
