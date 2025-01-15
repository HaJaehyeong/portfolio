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
총 5명 (PM 1명, Back 1명, Front 1명, Server 1명, SE 1명)
      
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

### 기대 효과 및 진행 상황
- 진행 상황 : 공용 UI 컴포넌트 개발 완료, 실시간 데이터 처리 화면 90% 이상 구현
- 기대 효과
  - 공작기계 최적화 성능 개선을 통해 생산성 13%이상 증가 목표
  - 공구 수명 측정 오차 범위 35% 이내 목표
  - 가공속도 가변에 따른 부하값 일관성 측정 변동폭 10% 이내 목표
  - 원가 절감율 3% 이상 목표
`,
      skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
      startedAt: '2024.12.01',
      endedAt: '~',
    },
    {
      projectId: '2',
      titleKo: '바로팩토리',
      titleEn: 'Baro Factory',
      description: `## 바로팩토리
#### [2024.02 ~ 2024.11] 
      
### 프로젝트 개요
실시간 가공 상태부터 작업자 시간 관리 등 생산 현장에 필요한 정보를 파악해 생산과 근무 효율을 높이는 서비스
      
### 팀 구성
총 5명 (PM 1명, Back 1명, Front 1명, Server 1명, SE 1명)

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
- 실시간 모니터링 화면 및 어드민 화면 개발
- 실시간 기계 데이터 처리
- Scrum 개발 방법론 도입
      
### 상세 업무
- 실시간 모니터링 화면 개발
  - \`Vue.js\`로 개발된 실시간 모니터링 화면 \`Next.js(React)\`로 리뉴얼
  - \`WS\` 으로 실시간 데이터 처리
- 어드민 화면 개발
  - \`Vue.js\`로 개발된 어드민 화면 \`Next.js(React)\`로 리뉴얼
  - 어드민 화면 설계
- Scrum 개발 방법론 도입
  - Daily Scrum, Sprint Planning, Retrospective 도입
  - Story Point로 일정 관리

### 업무 성과
- 리뉴얼 전 버그로 인한 문의가 \`주2-4건\`에서 \`월0-1건\`으로 감소
- 실시간 모니터링 페이지 성능 40% 증가
`,
      skills: ['Next.js', 'React', 'TypeScript', 'GCP'],
      startedAt: '2024.02.05',
      endedAt: '2024.10.31',
    },
    {
      projectId: '3',
      titleKo: '차세대 프론트엔드 프로젝트',
      titleEn: 'Next Generation Front End Project',
      description: `## 차세대 프론트엔드 프로젝트
#### [2021.10 ~ 2023.03] 
      
### 프로젝트 개요
서포트 종료 될 AngularJS에 취약성이 검출되어 Angular로 업그레이드
      
### 팀 구성
총 5명 (PM 1명, Back 1명, Front 1명, Server 1명, SE 1명)

### 본인 역할
프론트엔드 개발 담당 (퍼블리싱 포함)

### SKILL:
- Angular, AngularJS
- Typescript
- HTML
- SCSS
- CSS

### 주요 역할
`,
      skills: ['angular', 'typescript', 'aws'],
      startedAt: '2021.10.01',
      endedAt: '2023.03.31',
    },
    {
      projectId: '4',
      titleKo: '전형흐름 관리 프로젝트',
      titleEn: 'Selection Flow Management Project',
      description: `## 전형흐름 관리 프로젝트
#### [2020.04 ~ 2021.09] 
      
### 프로젝트 개요
서비스중인 플랫폼에 고정적인 전형 흐름을 커스터마이징하는 신규 기능 추가
      
### 팀 구성
총 5명 (PM 1명, Back 1명, Front 1명, Server 1명, SE 1명)

### 본인 역할
백엔드, 프론트엔드 개발 담당 (퍼블리싱 포함)

### SKILL:
- Angular, AngularJS
- Typescript
- HTML
- SCSS
- CSS
- Scala (Play Framework)

### 주요 역할
`,
      skills: ['scala', 'java', 'angular', 'typescript', 'aws'],
      startedAt: '2020.04.01',
      endedAt: '2021.09.30',
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
