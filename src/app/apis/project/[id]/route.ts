import { NextResponse } from 'next/server';

export type ProjectResponse = {
  projectId: string;
  title: string;
  description: string;
  skills: string[];
};

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const ProjectInfoList = [
    {
      projectId: '1',
      title: 'Government-funded R&D SM project',
      description: 'Hello, World!!',
      skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
    },
  ];

  try {
    const projectId = (await params).id;
    const projectInfo = ProjectInfoList.find((project) => project.projectId === projectId);

    if (!projectInfo) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        ...projectInfo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
