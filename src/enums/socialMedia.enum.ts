import { RiGithubFill, RiInstagramLine, RiNewsLine } from '@remixicon/react';
import { EnumBase, EnumDef } from './enumBase';

const SocialMediaCode = {
  github: 'github',
  blog: 'blog',
  insta: 'insta',
};
type SocialMediaCode = (typeof SocialMediaCode)[keyof typeof SocialMediaCode];

const SocialMediaName = {
  github: 'Github',
  blog: 'Blog',
  insta: 'Instagram',
};
type SocialMediaName = (typeof SocialMediaName)[keyof typeof SocialMediaName];

const SocialMediaIcon = {
  github: RiGithubFill,
  blog: RiNewsLine,
  insta: RiInstagramLine,
};
type SocialMediaIcon = (typeof SocialMediaIcon)[keyof typeof SocialMediaIcon];

export type SocialMediaEnum = EnumDef & {
  code: SocialMediaCode;
  name: SocialMediaName;
  icon: SocialMediaIcon;
};

export class SocialMedia extends EnumBase<SocialMediaEnum> {
  github = {
    code: SocialMediaCode.github,
    name: SocialMediaName.github,
    icon: SocialMediaIcon.github,
  };

  blog = {
    code: SocialMediaCode.blog,
    name: SocialMediaName.blog,
    icon: SocialMediaIcon.blog,
  };

  insta = {
    code: SocialMediaCode.insta,
    name: SocialMediaName.insta,
    icon: SocialMediaIcon.insta,
  };

  values = [this.github, this.blog, this.insta];
}
