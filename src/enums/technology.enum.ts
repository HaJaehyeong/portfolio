import {
  RiAngularjsFill,
  RiCss3Fill,
  RiFlutterFill,
  RiGamepadFill,
  RiHtml5Fill,
  RiNextjsLine,
  RiReactjsFill,
  RiTerminalBoxFill,
  RiUser4Fill,
  RiVuejsFill,
  RiVuejsLine,
} from '@remixicon/react';
import { EnumBase, EnumDef } from './enumBase';

const TechnologyCode = {
  react: 'react',
  html5: 'html5',
  vue: 'vue',
  css: 'css',
  flutter: 'flutter',
  angular: 'angular',
  variant5: 'variant5',
  nextjs: 'nextjs',
  terminal: 'terminal',
  user: 'user',
  gamepad: 'gamepad',
};
type TechnologyCode = (typeof TechnologyCode)[keyof typeof TechnologyCode];

const TechnologyName = {
  react: 'React',
  html5: 'HTML5',
  vue: 'Vue',
  css: 'CSS',
  flutter: 'Flutter',
  angular: 'Angular',
  variant5: 'Variant5',
  nextjs: 'Next.js',
  terminal: 'Terminal',
  user: 'User',
  gamepad: 'Gamepad',
};
type TechnologyName = (typeof TechnologyName)[keyof typeof TechnologyName];

const TechnologyIcon = {
  react: RiReactjsFill,
  html5: RiHtml5Fill,
  vue: RiVuejsFill,
  css: RiCss3Fill,
  flutter: RiFlutterFill,
  angular: RiAngularjsFill,
  variant5: RiVuejsLine,
  nextjs: RiNextjsLine,
  terminal: RiTerminalBoxFill,
  user: RiUser4Fill,
  gamepad: RiGamepadFill,
};
type TechnologyIcon = (typeof TechnologyIcon)[keyof typeof TechnologyIcon];

const TechnologyBackgroundColor = {
  react: '#86E1F9',
  html5: '#FFA67E',
  vue: '#81D4AF',
  css: '#95D6F0',
  flutter: '#B7A1CE',
  angular: '#F2A9B9',
  variant5: '#A0BDE1',
  nextjs: '#ABCDEF', // NOTE(hajae): 디자인이 없기 때문에 임시
  terminal: '#ABCDEF', // NOTE(hajae): 디자인이 없기 때문에 임시
  user: '#ABCDEF', // NOTE(hajae): 디자인이 없기 때문에 임시
  gamepad: '#ABCDEF', // NOTE(hajae): 디자인이 없기 때문에 임시
} as const;
type TechnologyBackgroundColor = (typeof TechnologyBackgroundColor)[keyof typeof TechnologyBackgroundColor];

export type TechnologyEnum = EnumDef & {
  code: TechnologyCode;
  name: TechnologyName;
  icon: TechnologyIcon;
  backgroundColor: TechnologyBackgroundColor;
};

export class Technology extends EnumBase<TechnologyEnum> {
  react = {
    code: TechnologyCode.react,
    name: TechnologyName.react,
    icon: TechnologyIcon.react,
    backgroundColor: TechnologyBackgroundColor.react,
  };

  html5 = {
    code: TechnologyCode.html5,
    name: TechnologyName.html5,
    icon: TechnologyIcon.html5,
    backgroundColor: TechnologyBackgroundColor.html5,
  };

  vue = {
    code: TechnologyCode.vue,
    name: TechnologyName.vue,
    icon: TechnologyIcon.vue,
    backgroundColor: TechnologyBackgroundColor.vue,
  };

  css = {
    code: TechnologyCode.css,
    name: TechnologyName.css,
    icon: TechnologyIcon.css,
    backgroundColor: TechnologyBackgroundColor.css,
  };

  flutter = {
    code: TechnologyCode.flutter,
    name: TechnologyName.flutter,
    icon: TechnologyIcon.flutter,
    backgroundColor: TechnologyBackgroundColor.flutter,
  };

  angular = {
    code: TechnologyCode.angular,
    name: TechnologyName.angular,
    icon: TechnologyIcon.angular,
    backgroundColor: TechnologyBackgroundColor.angular,
  };

  variant5 = {
    code: TechnologyCode.variant5,
    name: TechnologyName.variant5,
    icon: TechnologyIcon.variant5,
    backgroundColor: TechnologyBackgroundColor.variant5,
  };

  nextjs = {
    code: TechnologyCode.nextjs,
    name: TechnologyName.nextjs,
    icon: TechnologyIcon.nextjs,
    backgroundColor: TechnologyBackgroundColor.nextjs,
  };

  terminal = {
    code: TechnologyCode.terminal,
    name: TechnologyName.terminal,
    icon: TechnologyIcon.terminal,
    backgroundColor: TechnologyBackgroundColor.terminal,
  };

  user = {
    code: TechnologyCode.user,
    name: TechnologyName.user,
    icon: TechnologyIcon.user,
    backgroundColor: TechnologyBackgroundColor.user,
  };

  gamepad = {
    code: TechnologyCode.gamepad,
    name: TechnologyName.gamepad,
    icon: TechnologyIcon.gamepad,
    backgroundColor: TechnologyBackgroundColor.gamepad,
  };

  values = [
    this.react,
    this.html5,
    this.vue,
    this.css,
    this.flutter,
    this.angular,
    this.variant5,
    this.nextjs,
    this.terminal,
    this.user,
    this.gamepad,
  ];
}
