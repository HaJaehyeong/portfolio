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
  skills: string[];
  imageSrc: string;
};

export async function GET(req: Request) {
  try {
    const projects: ProjectsResponse = {
      projects: [
        {
          proejctId: '1',
          title: 'Government-funded R&D SM project',
          description: 'Hello, World!!',
          mainSkill: 'nextjs',
          skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
          imageSrc: '',
        },
        {
          proejctId: '2',
          title: 'Baro Factory',
          description: 'Hello, World!!',
          mainSkill: 'react',
          skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
          imageSrc: '',
        },
        {
          proejctId: '3',
          title: 'Next Generation Front End Project',
          description: 'Welcome to the second post!',
          mainSkill: 'angular',
          skills: ['Angular', 'TypeScript', 'AWS'],
          imageSrc: '',
        },
        {
          proejctId: '4',
          title: 'Selection Flow Management Improvement ',
          description: 'Hello, Next.js!',
          mainSkill: 'angular',
          skills: ['Scala', 'Java', 'Angular.js', 'TypeScript', 'AWS'],
          imageSrc: '',
        },
      ],
    };
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
