import { MOCK_PROJECTS } from '@/types/constants';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    return NextResponse.json(MOCK_PROJECTS, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
