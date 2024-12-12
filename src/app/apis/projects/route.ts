import { TechnologyEnum } from '@/enums/technology.enum';
import { NextResponse } from 'next/server';

export type ProjectsResponse = {
  projects: Project[];
};

export type Project = {
  proejctId: string;
  title: string;
  description: string;
  mainSkill: TechnologyEnum['code'];
  skills: TechnologyEnum['code'][];
  imageSrc: string;
};

export async function GET(req: Request) {
  try {
    const projects: ProjectsResponse = {
      projects: [
        {
          proejctId: '1',
          title: '_government-funded-R&D',
          description: 'Government-funded R&D SM project',
          mainSkill: 'nextjs',
          skills: ['nextjs', 'react', 'typescript', 'gcp'],
          imageSrc: '/images/project1.png',
        },
        {
          proejctId: '2',
          title: '_smart-factory',
          description: 'Baro Factory',
          mainSkill: 'react',
          skills: ['nextjs', 'react', 'typescript', 'gcp'],
          imageSrc: '/images/project2.png',
        },
        {
          proejctId: '3',
          title: '_angular-version-upgrade',
          description: 'Next Generation Front End Project',
          mainSkill: 'angular',
          skills: ['angular', 'typescript', 'aws'],
          imageSrc: '/images/project3.png',
        },
        {
          proejctId: '4',
          title: '_adding-new-feature ',
          description: 'Selection Flow Management Improvement ',
          mainSkill: 'angular',
          skills: ['scala', 'java', 'angular', 'typescript', 'aws'],
          imageSrc: '/images/project4.png',
        },
      ],
    };
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
