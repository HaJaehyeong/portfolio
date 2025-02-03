import { TechnologyEnum } from '@/enums/technology.enum';
import { StaticImageData } from 'next/image';

export type TechCodesType =
  | 'react'
  | 'html5'
  | 'vue'
  | 'css'
  | 'flutter'
  | 'angular'
  | 'variant5'
  | 'nextjs'
  | 'terminal'
  | 'user'
  | 'gamepad';
export type SocialMediaType = 'github' | 'blog' | 'insta';
export type TabType = {
  tabName: string;
  pathname: string;
};

export type DirectoryList = {
  directories: Directory[];
};

export type Directory = {
  directoryId: number;
  directoryName: string;
  directoryType: 'terminal' | 'user' | 'gamepad';
  files: FileType[];
};
type FileType = {
  fileId: number;
  fileName: string;
};

export type DirectoryContentList = {
  contents: DirectoryContent[];
};
type DirectoryContent = {
  contentId: number;
  directoryId: number;
  content: string;
  fileId?: number;
};

export const TABS: TabType[] = [
  {
    tabName: 'hello',
    pathname: '/',
  },
  {
    tabName: 'about-me',
    pathname: '/about',
  },
  {
    tabName: 'projects',
    pathname: '/projects',
  },
  {
    tabName: '(-_- )/',
    pathname: '/play',
  },
];

type SocialMediaLink = {
  name: string;
  url: string;
};
export const SOCIAL_MEDIAS: SocialMediaLink[] = [
  {
    name: 'blog',
    url: 'https://velog.io/@hajea305/posts',
  },
  {
    name: 'insta',
    url: 'https://www.instagram.com/h__jaeee',
  },
];
export const DIR_COLORS = ['var(--accent-red)', 'var(--accent-green)', 'var(--secondary-blue)'];
export const EXPLORER_LIST = ['terminal', 'user', 'gamepad'];
export const DIRECTORY_LIST: DirectoryList = {
  directories: [
    {
      directoryId: 0,
      directoryName: 'experience',
      directoryType: 'terminal',
      files: [],
    },
    {
      directoryId: 1,
      directoryName: 'hard-skills',
      directoryType: 'terminal',
      files: [],
    },
    {
      directoryId: 2,
      directoryName: 'soft-skills',
      directoryType: 'terminal',
      files: [],
    },
    {
      directoryId: 3,
      directoryName: 'about-me',
      directoryType: 'user',
      files: [],
    },
    {
      directoryId: 4,
      directoryName: 'career',
      directoryType: 'user',
      files: [
        {
          fileId: 2,
          fileName: 'yonhap-system',
        },
        {
          fileId: 3,
          fileName: 'bizreach',
        },
      ],
    },
    {
      directoryId: 5,
      directoryName: 'education',
      directoryType: 'user',
      files: [
        {
          fileId: 0,
          fileName: 'university',
        },
        {
          fileId: 1,
          fileName: 'high-school',
        },
      ],
    },
    {
      directoryId: 6,
      directoryName: 'cook!',
      directoryType: 'gamepad',
      files: [],
    },
    {
      directoryId: 7,
      directoryName: 'game',
      directoryType: 'gamepad',
      files: [],
    },
    {
      directoryId: 8,
      directoryName: 'travel',
      directoryType: 'gamepad',
      files: [],
    },
    {
      directoryId: 9,
      directoryName: 'investment',
      directoryType: 'gamepad',
      files: [],
    },
  ],
};

export const EXPLORER_CONTENTS: DirectoryContentList = {
  contents: [
    {
      contentId: 0,
      directoryId: 0,
      content:
        '대학교 졸업 후 일본의 `Bizreach`에 입사하여 2년간 풀스택 개발자, 2년간 프론트엔드 개발자로 근무했습니다. 일본에서의 근무 경험은 다양한 기술적 역량과 문제 해결 능력을 키우는 소중한 시간이었습니다. \n 약 800개의 고객사를 대상으로 서비스 유지보수, 신규 기능 개발, 서비스 안정화에 기여하며, 안정적인 개발 프로세스를 경험했습니다. 특히 `Scrum 개발 방법론`을 도입하고 시행착오를 거쳐 이를 개선해 나가며, 대규모 조직에서의 협업과 프로세스 최적화에 대한 깊은 이해를 쌓을 수 있었습니다. \n \n 4년간의 일본 근무를 마친 후, 더욱 경쟁적인 환경에서 성장하고자 IT 경쟁이 치열하고 빠르게 변화하는 한국으로 귀국했습니다. \n \n 귀국 후, 스마트 팩토리 서비스를 제공하는 `연합시스템`에 입사하여 새로운 도전에 임하고 있습니다. `Next.js(React)`를 독학하여 Vue.js로 작성된 기존 서비스를 React로 리뉴얼하고 최적화 작업을 진행했습니다. \n 또한, 정부 R&D 과제를 수행하며 팀 내 `Scrum` 도입을 시도하는 등, 새로운 기술과 프로세스를 적용하며 성장의 기회를 넓히고 있습니다.',
    },
    {
      contentId: 1,
      directoryId: 1,
      content:
        'Next.js : 서비스 개발 경험 1년 \n Typescript : 서비스 개발 경험 5년 \n Angular : 서비스 개발 경험 4년 \n HTML : 서비스 개발 경험 5년 \n CSS(SCSS) : 서비스 개발 경험 5년 \n Scrum : 3년 이상 경험',
    },
    {
      contentId: 2,
      directoryId: 2,
      content:
        'Scala(Java기반) : 서비스 개발 경험 2년 \n AWS : ECR, ECS 사용 경험, 가벼운 개인 웹페이지 배포 경험 \n MySQL : SQL문 조회, 삽입, 수정, 삭제 가능한 레벨 \n Docker : 검색하며 docker-compose 작성, 기본적인 기능 사용 가능한 레벨',
    },
    {
      contentId: 3,
      directoryId: 3,
      content:
        'Front End Developer \n 하재형(1994.03.05) \n \n 안녕하세요. 하재형이라고 합니다. 저는 대학시절 일본 취업반에 들어가서 일본 취업에 성공하게 되어 일본에서 4년간 근무했습니다. \n 일본에서 4년이라는 개발경험을 쌓고 한국에 귀국하여 현재 한국에서 1년간 프론트엔드 개발자로서 근무를 하고 있습니다.',
    },
    {
      contentId: 4,
      directoryId: 4,
      content: '2024.02 ~ 재직중 : 연합시스템 \n 2019.04 ~ 2023.04 : Bizreach(visional group)',
    },
    {
      contentId: 5,
      directoryId: 5,
      content:
        'University : \n 영진 전문 대학교 \n 컴퓨터 정보 계열 (3년제, 일본 취업반) \n 2013.03 ~ 2019.02 (졸업, 전문학사) \n \n High School : \n 대구 경상고등학교 \n 2010.03 ~ 2013.02',
    },
    {
      contentId: 6,
      directoryId: 5,
      fileId: 0,
      content:
        '영진 전문 대학교 \n 컴퓨터 정보 계열 (3년제, 일본 취업반) \n 2013.03 ~ 2019.02 (졸업, 전문학사) \n \n 1. 후쿠오카 어학연수 (6주) \n 후쿠오카에서 일본어 어학연수를 진행. 주중엔 일본어 강의를 듣고, 주말에는 일본 문화 체험 \n \n 2. PPomi https://github.com/HaJaehyeong/PPomi \n GIF(Global Innovator Festa)에 참여한 프로젝트 \n \n 3. Kituna https://github.com/HaJaehyeong/kituna \n Kituna(機繋な, 기계를 이어준다)는 자판기를 손쉽게 판매 데이터를 수집, 분석하게 해주는 프로젝트',
    },
    {
      contentId: 7,
      directoryId: 5,
      fileId: 1,
      content: '경상고등학교 (남고) \n 2010.03 ~ 2013.02 \n 인문계',
    },
    {
      contentId: 8,
      directoryId: 6,
      content:
        '요리하는 것을 좋아하며, 가장 자신있고 좋아하는 요리는 사천식 마파두부. 화자오라는 얼얼하게 하는 향신료를 넣으면 그게 또 매력적입니다.',
    },
    {
      contentId: 9,
      directoryId: 7,
      content:
        '어릴때는 온라인 게임을 좋아했지만 요즘은 시간에 구애받지 않고 천천히 혼자 즐길 수 있는 콘솔 게임류를 하고 있습니다.',
    },
    {
      contentId: 10,
      directoryId: 8,
      content:
        '일본에 살면서 후쿠오카, 삿포로, 오사카, 후지산 등산 등 한국과는 다른 문화를 체험하기위해 여행을 다녔습니다. 특히 일본에 외진 곳의 조용하면서 편안한 분위기를 좋아해서 골목 여기저기 산책도 즐겼습니다.',
    },
    {
      contentId: 11,
      directoryId: 9,
      content:
        '한국에 귀국 후, 노후의 안정적인 현금흐름을 만들기 위해 재테크를 공부. \n 재테크를 공부하면서 좋았던 점은 세상이 크게 어떤 흐름으로 움직이고 있는지, 또 많은 사람들이 어떤 기술, 분야에 관심을 가지고 있는지를 알 수 있었던 점입니다.',
    },
    {
      contentId: 12,
      directoryId: 3,
      fileId: 2,
      content:
        '회사명 : 연합시스템 \n 근무기간 : 2024.02.04 ~ 재직중 \n 회사소개 : \n - 스마트팩토리 플랫폼 제공 및 제조업 \n - 직원수 약 30명 \n - 매출액 약 80억 \n 소속부서 : 전략본부 IT연구개발팀 \n 부서소개 : 스마트팩토리 플랫폼 개발 및 유지 보수, 정부 R&D과제 진행',
    },
    {
      contentId: 13,
      directoryId: 4,
      fileId: 3,
      content:
        '회사명 : Bizreach (株式会社 ビズリーチ) \n 근무기간 : 2019.04.01 ~ 2023.04.30 (4년 1개월) \n 회사소개 : \n - 이직, 헤드헌터 및 하이 클래스 채용 \n - 직원수 약 2,000명 \n - 매출액 4,395억 \n 소속부서 : Hrmos 채용 개발본부 \n 부서소개 : 채용 관리 시스템. 기업의 인사, 채용을 지원 (B2B)',
    },
  ],
};

export const SHOWCASE_CODE_NEXT_JS = `type AdminLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
          
const AdminLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
  const token = await getCookieValue('token');
          
  return (
    <StoreProvider token={token}>
      {/* 생략 */}
    </StoreProvider>
  );
};
          
export default AdminLayout;`;
export const SHOWCASE_CODE_NEXT_JS_DETAIL =
  '최근 1년간 바로팩토리 및 정부 R&D과제를 Next.js Framework를 이용해 개발을 진행했습니다.';

export const SHOWCASE_CODE_SCSS = `.header-title {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__title {
    color: var(--text-primary);
    font-size: 34px;
    font-weight: 700;
  }

  &__sub-title {
    color: var(--text-secondary);
    font-size: 14px;
  }
}`;
export const SHOWCASE_CODE_SCSS_DETAIL =
  '일본에서는 퍼블리셔라는 포지션이 없었기 때문에 퍼블리싱도 프론트엔드 개발자가 담당 했었습니다. 또한, 한국에서 Next.js로 개발할 때도 동일하게 사내 퍼블리셔가 없었기 때문에 퍼블리싱까지 담당한 경험이 있습니다.';

export const MY_EMAIL = 'hajae305@gmail.com';
export const MY_PHONE = '+82-10-8077-1157';
export const URL_REGEX = /(https?:\/\/[^\s]+)/g;

type ContactLink = {
  name: string;
  url: string;
};
export const CONTACT_LINKS: ContactLink[] = [
  {
    name: 'Notion resume',
    url: 'https://sleepy-manicure-27d.notion.site/cb1e29f9cd144995b98f6f44aaa59cf3?pvs=4',
  },
  {
    name: 'Blog main',
    url: 'https://velog.io/@hajea305/posts',
  },
  {
    name: 'Instagram account',
    url: '',
  },
  {
    name: 'Github profile',
    url: 'https://github.com/HaJaehyeong',
  },
];

export type ProjectResponse = {
  projectId: string;
  titleKo: string;
  titleEn: string;
  description: string;
  skills: string[];
  startedAt: string;
  endedAt: string;
};
export const MOCK_PROJECT_INFO_LIST: ProjectResponse[] = [
  {
    projectId: '1',
    titleKo: '정부지원 R&D SM과제',
    titleEn: 'Government-funded R&D SM project',
    description: `## 정부 R&D 과제 Smart Machine 
#### [2024.11 ~ 진행중]

\`\`\`
회사명 : 연합시스템
근무기간 : 2024.02.04 ~ 재직중
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
근무기간 : 2024.02.04 ~ 재직중
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
근무기간 : 2019.04.01 ~ 2023.04.30 (4년 1개월)
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
근무기간 : 2019.04.01 ~ 2023.04.30 (4년 1개월)
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

export type ProjectsResponse = {
  projects: Project[];
};

export type Project = {
  projectId: string;
  title: string;
  description: string;
  mainSkill: TechnologyEnum['code'];
  skills: TechnologyEnum['code'][];
  imageSrc: string;
};

export const MOCK_PROJECTS: ProjectsResponse = {
  projects: [
    {
      projectId: '1',
      title: '_government-funded-R&D',
      description: 'Government-funded R&D Smart Machine project',
      mainSkill: 'nextjs',
      skills: ['nextjs', 'react', 'typescript', 'gcp'],
      imageSrc: '/images/project1.png',
    },
    {
      projectId: '2',
      title: '_smart-factory',
      description: 'Baro Factory',
      mainSkill: 'react',
      skills: ['nextjs', 'react', 'typescript', 'gcp'],
      imageSrc: '/images/project2.png',
    },
    {
      projectId: '3',
      title: '_angular-version-upgrade',
      description: 'Next Generation Front End Project',
      mainSkill: 'angular',
      skills: ['angular', 'typescript', 'aws'],
      imageSrc: '/images/project3.png',
    },
    {
      projectId: '4',
      title: '_adding-new-feature ',
      description: 'Selection Flow Management Improvement ',
      mainSkill: 'angular',
      skills: ['scala', 'java', 'angular', 'typescript', 'aws'],
      imageSrc: '/images/project4.png',
    },
  ],
};
