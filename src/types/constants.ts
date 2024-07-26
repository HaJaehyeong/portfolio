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
export type AccordionType = {
  accordionName: string;
  isOpen: boolean;
  toggles: Toggle;
  dirColor: string;
};
type Toggle = {};

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
export const accordions: AccordionType[] = [
  {
    accordionName: 'experience',
    isOpen: true,
    toggles: {},
    dirColor: 'var(--accent-red)',
  },
  {
    accordionName: 'hard-skills',
    isOpen: false,
    toggles: {},
    dirColor: 'var(--accent-green)',
  },
  {
    accordionName: 'soft-skills',
    isOpen: false,
    toggles: {},
    dirColor: 'var(--gradients-blue)',
  },
];
