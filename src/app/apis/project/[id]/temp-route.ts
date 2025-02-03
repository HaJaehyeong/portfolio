import { MOCK_PROJECT_INFO_LIST } from '@/types/constants';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// NOTE(hajae): Github Pages의 정적페이지 배포를 위해 route를 인식못하도록 임시로 수정
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // TODO(hajae): 내용은 나중에 추가 예정
  try {
    const projectId = (await params).id;
    const projectInfo = MOCK_PROJECT_INFO_LIST.find((project) => project.projectId === projectId);

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
