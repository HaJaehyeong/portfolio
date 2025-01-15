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

\`\`\`
회사명 : 연합시스템
근무기간 : 2024/02/04 ~ 재직중
회사소개 : 스마트팩토리 플랫폼 제공 및 제조업 / 직원수 약 30명 / 매출액 약 80억
소속부서 : 전략본부 IT연구개발팀
부서소개 : 스마트팩토리 플랫폼 개발 및 유지 보수, 정부 R&D과제 진행
\`\`\`

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

\`\`\`
회사명 : 연합시스템
근무기간 : 2024/02/04 ~ 재직중
회사소개 : 스마트팩토리 플랫폼 제공 및 제조업 / 직원수 약 30명 / 매출액 약 80억
소속부서 : 전략본부 IT연구개발팀
부서소개 : 스마트팩토리 플랫폼 개발 및 유지 보수, 정부 R&D과제 진행
\`\`\`

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

\`\`\`
회사명 : Bizreach (株式会社 ビズリーチ)
근무기간 : 2019/04/01 ~ 2023/04/30 (4년 1개월)
회사소개 : 이직, 헤드헌터 및 하이 클래스 채용 / 직원수 약 2,000명 / 매출액 4,395억
소속부서 : Hrmos 채용 개발본부
부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B)
\`\`\`

### 프로젝트 개요
서포트 종료 될 AngularJS에 취약성이 검출되어 Angular로 업그레이드
      
### 팀 구성
총 11명 (PM 1명, 개발자 6명, QA 3명)

### 직책
서브 리더

### 본인 역할
프론트엔드 개발 담당 (퍼블리싱 포함)

### SKILL:
- Angular, AngularJS
- Typescript
- HTML
- SCSS
- CSS

### 주요 업무
- 기존에 작성되어 있는 AngularJS코드를 Angular 12버전으로 새롭게 작성
  - 서포트 종료 예정인 AngularJS코드를 Angular 12버전으로 업그레이드
  - 코드 리팩토링
  - 잠재되어 있던 프론트엔드의 버그 수정
- 공용 컴포넌트 작성
  - AngularJS에서 작성된 공용 컴포넌트 새롭게 작성
  - Select, Tooltip, Editor 등 자주 사용되는 공용 컴포넌트 작성
- 기존에 잠재되어 있던 버그 수정
- 1주 단위 스프린트로 업무를 계획/수행
  - Scrum 개발방식으로 개발
- CS(Customer Success)와 디자이너와 커뮤니케이션
- 코드리뷰 & 에러감시

### 주요 성과
- AngularJS모듈과 별개로 새로운 모듈작성
- AngularJS로 작성된 페이지의 7/9 릴리즈
- 릴리즈한 페이지의 취약성 검사 통과
- 잠재되어 있던 버그 80% 수정
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

\`\`\`
회사명 : Bizreach (株式会社 ビズリーチ)
근무기간 : 2019/04/01 ~ 2023/04/30 (4년 1개월)
회사소개 : 이직, 헤드헌터 및 하이 클래스 채용 / 직원수 약 2,000명 / 매출액 4,395억
소속부서 : Hrmos 채용 개발본부
부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B)
\`\`\`

### 프로젝트 개요
서비스중인 플랫폼에 고정적인 전형 흐름을 커스터마이징하는 신규 기능 추가
      
### 팀 구성
총 5명 (PO/PM 1명, 개발자 12명, 디자이너 3명, QA 2명, CS 3명↑)

### 본인 역할
백엔드, 프론트엔드 개발 담당 (퍼블리싱 포함)

### SKILL:
- Angular, AngularJS
- Typescript
- HTML
- SCSS
- CSS
- Scala (Play Framework)

### 주요 업무
- 테이블(DB) 설계/수정
    - 새롭게 추가되는 기능에 필요한 테이블 설계
- Backend, Frontend 개발
    - Backend(Scala, Play): 새로운 기능에 필요한 API 작성
    - Frontend(AngularJS, Typescript): 새롭게 설계한 화면 개발
    - 단위테스트(TDD) 작성
- 1주 단위 스프린트로 업무를 계획/수행
    - Scrum 개발방식으로 개발
- CS(Customer Success)와 디자이너와 커뮤니케이션
- 코드리뷰 & 에러감시

### 주요 성과
- 2021년 상반기 우수팀상 수상
- 기능요인으로 인한 서비스 해약률의 25% 해소
- 새로운 기능 릴리즈
- 개발자, 디자이너, CS, 영업부가 하나의 팀이 되는 것을 실현
- 고객과 연계하여 어플리케이션 개선을 실시
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
