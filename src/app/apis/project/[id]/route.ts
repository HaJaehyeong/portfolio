import { NextResponse } from 'next/server';

export type ProjectResponse = {
  projectId: string;
  titleKo: string;
  titleEn: string;
  description: string;
  skills: string[];
  startedAt: string;
  endedAt: string;
};

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // TODO(hajae): 내용은 나중에 추가 예정
  const ProjectInfoList = [
    {
      projectId: '1',
      titleKo: '정부지원 R&D SM과제',
      titleEn: 'Government-funded R&D SM project',
      description: 'Hello, World!!',
      skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
      startedAt: '2024/10/10',
      endedAt: '2024/10/20',
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
