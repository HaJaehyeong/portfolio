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
export const SOCIAL_MEDIAS = ['blog', 'insta'];
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
      directoryName: 'interests',
      directoryType: 'user',
      files: [],
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
      directoryName: 'watch-e-sports',
      directoryType: 'gamepad',
      files: [],
    },
    {
      directoryId: 7,
      directoryName: 'game',
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
      content: 'I.... am..... Iron man.. 4',
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
      content: 'I.... am..... Iron man.. 5 toggle 0',
    },
    {
      contentId: 8,
      directoryId: 6,
      content: 'I.... am..... Iron man.. 6',
    },
    {
      contentId: 9,
      directoryId: 7,
      content: 'I.... am..... Iron man.. 7',
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
