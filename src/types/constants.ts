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
export const DIR_COLORS = ['var(--accent-red)', 'var(--accent-green)', 'var(--accent-blue)'];
export const EXPLORER_LIST: DirectoryList = {
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
      content: 'I.... am..... Iron man.. 0',
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

export type AccordionList = {
  terminals: AccordionType[];
  users: AccordionType[];
  gamepads: AccordionType[];
};
export type AccordionType = {
  accordionId: number;
  accordionName: string;
  isOpen: boolean;
  toggles: ToggleType[];
  dirColor: string;
};
type ToggleType = {
  toggleId: number;
  toggleName: string;
  isOpen: boolean;
};

export const ACCORDIONS: AccordionList = {
  terminals: [
    {
      accordionId: 0,
      accordionName: 'experience',
      isOpen: true,
      toggles: [],
      dirColor: 'var(--accent-red)',
    },
    {
      accordionId: 1,
      accordionName: 'hard-skills',
      isOpen: false,
      toggles: [],
      dirColor: 'var(--accent-green)',
    },
    {
      accordionId: 2,
      accordionName: 'soft-skills',
      isOpen: false,
      toggles: [],
      dirColor: 'var(--gradients-blue)',
    },
  ],
  users: [
    {
      accordionId: 3,
      accordionName: 'about-me',
      isOpen: true,
      toggles: [],
      dirColor: 'var(--accent-red)',
    },
    {
      accordionId: 4,
      accordionName: 'interests',
      isOpen: false,
      toggles: [],
      dirColor: 'var(--accent-green)',
    },
    {
      accordionId: 5,
      accordionName: 'education',
      isOpen: false,
      toggles: [
        {
          toggleId: 0,
          toggleName: 'high-school',
          isOpen: false,
        },
        {
          toggleId: 1,
          toggleName: 'university',
          isOpen: false,
        },
      ],
      dirColor: 'var(--gradients-blue)',
    },
  ],
  gamepads: [
    {
      accordionId: 6,
      accordionName: 'watch-e-sports',
      isOpen: true,
      toggles: [],
      dirColor: 'var(--accent-red)',
    },
    {
      accordionId: 7,
      accordionName: 'game',
      isOpen: false,
      toggles: [],
      dirColor: 'var(--accent-green)',
    },
  ],
};
