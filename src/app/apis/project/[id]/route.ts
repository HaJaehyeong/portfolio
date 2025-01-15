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
      description: `## 정부 R&D 과제 Smart Machine 
#### [2024.11 ~ 진행중]

### 프로젝트 개요
공작 기계가 스스로 최적화를 수행할 수 있도록 AIoT 기반 기술을 활용하여 스마트 공작기계를 구현하는 프로젝트
      
### 팀 구성
총 5명 (PM 1명, Back-End 1명, Front-End 1명, SE 2명)
      
### 본인 역할
프론트엔드 개발 담당 (퍼블리싱 포함)
      
### SKILL:
- Next.js
- React
- TypeScript
- HTML
- SCSS
- CSS

### 주요 역할
- **사내용 공용 UI 컴포넌트 개발**
  - \`Input\`, \`Button\`, \`Menu\`, \`Modal\` 등 재사용 가능한 컴포넌트 설계 및 구현
  - 컴포넌트의 일관된 디자인 시스템 구축으로 개발 생산성 향상
- **R&D 과제 검증용 화면 개발**
  - 실시간 기계 데이터 처리를 위한 WebSocket(WS) 기반 화면 설계 및 개발
  - 사용자 친화적인 데이터 시각화 및 인터페이스 제공
- **웹 페이지 기획 및 디자인**
  - 요구사항 분석 및 화면 설계 작업 주도
  - 사용자 경험(UX)을 고려한 디자인과 구조 설계
`,
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
