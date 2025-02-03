import { MOCK_PROJECTS } from '@/types/constants';
import { NextResponse } from 'next/server';

// NOTE(hajae): Github Pages의 정적페이지 배포를 위해 route를 인식못하도록 임시로 수정
export async function GET(req: Request) {
  try {
    return NextResponse.json(MOCK_PROJECTS, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
