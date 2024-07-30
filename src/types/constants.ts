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
export type AccordionList = {
  terminals: AccordionType[];
  users: AccordionType[];
  gamepads: AccordionType[];
};
export type AccordionType = {
  accordionId: number;
  accordionName: string;
  isOpen: boolean;
  toggles: Toggle[];
  dirColor: string;
};
type Toggle = {
  toggleId: number;
  toggleName: string;
  isOpen: boolean;
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
