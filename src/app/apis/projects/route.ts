import { NextResponse } from 'next/server';

export type ProjectsResponse = {
  projects: Projects[];
};

export type Projects = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export async function GET(req: Request) {
  try {
    return NextResponse.json(
      {
        projects: [
          {
            id: '1',
            title: 'Government-funded R&D SM project',
            description: 'Hello, World!!',
            skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
          },
          {
            id: '2',
            title: 'Baro Factory',
            description: 'Hello, World!!',
            skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
          },
          {
            id: '3',
            title: 'Next Generation Front End Project',
            description: 'Welcome to the second post!',
            skills: ['Angular', 'TypeScript', 'AWS'],
          },
          {
            id: '4',
            title: 'Typical Flow Management Improvement Project ',
            description: 'Hello, Next.js!',
            skills: ['Scala', 'Java', 'Angular.js', 'TypeScript', 'AWS'],
          },
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
