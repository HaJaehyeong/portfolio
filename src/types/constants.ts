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
          fileName: 'high-school',
        },
        {
          fileId: 1,
          fileName: 'university',
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
        '대학교 졸업 후 일본의 `Bizreach`에 입사하여 2년간 풀스택 개발자, 2년간 프론트엔드 개발자로 근무했습니다. 일본에서의 근무 경험은 다양한 기술적 역량과 문제 해결 능력을 키우는 소중한 시간이었습니다. \n 약 800개의 고객사를 대상으로 서비스 유지보수, 신규 기능 개발, 서비스 안정화에 기여하며, 안정적인 개발 프로세스를 경험했습니다. 특히 `Scrum 개발 방법론`을 도입하고 시행착오를 거쳐 이를 개선해 나가며, 대규모 조직에서의 협업과 프로세스 최적화에 대한 깊은 이해를 쌓을 수 있었습니다. \n\n 4년간의 일본 근무를 마친 후, 더욱 경쟁적인 환경에서 성장하고자 IT 경쟁이 치열하고 빠르게 변화하는 한국으로 귀국했습니다. \n\n 귀국 후, 스마트 팩토리 서비스를 제공하는 `연합시스템`에 입사하여 새로운 도전에 임하고 있습니다. `Next.js(React)`를 독학하여 Vue.js로 작성된 기존 서비스를 React로 리뉴얼하고 최적화 작업을 진행했습니다. \n 또한, 정부 R&D 과제를 수행하며 팀 내 `Scrum` 도입을 시도하는 등, 새로운 기술과 프로세스를 적용하며 성장의 기회를 넓히고 있습니다.',
    },
    {
      contentId: 1,
      directoryId: 1,
      content: 'I.... am..... Iron man.. 1',
    },
    {
      contentId: 2,
      directoryId: 2,
      content: 'I.... am..... Iron man.. 2',
    },
    {
      contentId: 3,
      directoryId: 3,
      content: 'I.... am..... Iron man.. 3',
    },
    {
      contentId: 4,
      directoryId: 4,
      content: 'I.... am..... Iron man.. 4',
    },
    {
      contentId: 5,
      directoryId: 5,
      content: 'I.... am..... Iron man.. 5',
    },
    {
      contentId: 6,
      directoryId: 5,
      fileId: 0,
      content: 'I.... am..... Iron man.. 5 toggle 0',
    },
    {
      contentId: 7,
      directoryId: 5,
      fileId: 1,
      content: 'I.... am..... Iron man.. 5 toggle 1',
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

export const MY_EMAIL = 'hajae305@gmail.com';
export const MY_PHONE = '+82-10-8077-1157';
