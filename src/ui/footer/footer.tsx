'use client';
import { SOCIAL_MEDIAS, SocialMediaType } from '@/types/constants';
import SocialMedia from '../social-media/social-media';
import styles from './footer.module.scss';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';

type FooterProps = {
  isShow?: boolean;
};

const Footer: React.FC<FooterProps> = ({ isShow = false }) => {
  const { width } = useWindowSize();

  // NOTE(hajae): mobile보다 작을 때만 Footer 표시 위해
  const isMobileSize = width > 767;

  return (
    (isMobileSize || isShow) && (
      <div className={styles['footer']}>
        <div className={styles['footer__find-me']}>find me in: </div>
        <div className={styles['footer__others']}>
          <div className={styles['footer__social-links']}>
            {SOCIAL_MEDIAS.map((media, index) => (
              <Link key={media.name} href={media.url} target="_blank">
                <div key={index} className={styles['footer__social-icon']}>
                  <SocialMedia value={media.name as SocialMediaType} />
                </div>
              </Link>
            ))}
          </div>
          <Link href="https://github.com/HaJaehyeong" target="_blank">
            <div className={styles['footer__github']}>
              <span>@HaJaehyeong</span>
              <SocialMedia value="github" />
            </div>
          </Link>
        </div>
      </div>
    )
  );
};

export default Footer;
