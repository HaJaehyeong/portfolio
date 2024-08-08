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
        '울려댔어 사이렌 텅 빈 길거린엔 도망치다 흘린 칼자루와 피가 흥건해 우리 그때 어릴땐 뭘 몰랐었지 man 그냥 힘쎈 형이 제일로 멋졌었지 그땐 그래 우린 살아나왔어 지옥 이제 어딜가든 다 비옥 수도 없이 맛본 치욕 어릴때부터 입에 붙은 쌍욕 절대 할 수 없었지 신고 할 수 있는게 오직 기도 어떻게 느끼겠어 피곤 붉게 물들지 않을려 내 흰옷 여기서 더 있다간 감방이 내 방 종신형이 친구 책가방 안에 어린 내가 짝사랑하던 그 여잔 이 block에서 지금 몸 팔아 Oh 새꺄 this a real life 김치 냄새 땜에 놀려대길래 도시락통을 닫아 thats real life 그런 날 보고 지 점심을 나눠준 꼬마가 있었어 thats real life 어느 날 관 속에 그 친구의 얼굴을 만지게 됐어 thats 울려댔어 사이렌 텅 빈 길거린엔 도망치다 흘린 칼자루와 피가 흥건해 우리 그때 어릴땐 뭘 몰랐었지 man 그냥 힘쎈 형이 제일로 멋졌었지 그땐 그래 우린 살아나왔어 지옥 이제 어딜가든 다 비옥 수도 없이 맛본 치욕 어릴때부터 입에 붙은 쌍욕 절대 할 수 없었지 신고 할 수 있는게 오직 기도 어떻게 느끼겠어 피곤 붉게 물들지 않을려 내 흰옷',
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
