'use client';
import { SOCIAL_MEDIAS, SocialMediaType } from '@/types/constants';
import SocialMedia from '../social-media/social-media';
import styles from './footer.module.scss';
import useWindowSize from '@/hooks/useWindowSize';

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
          <div className={styles.socialIconWrapper}>
            {SOCIAL_MEDIAS.map((media, index) => (
              <div key={index} className={styles.socialIcon}>
                <SocialMedia value={media as SocialMediaType} />
              </div>
            ))}
          </div>
          <div className={styles.github}>
            @HaJaehyeong <SocialMedia value="github" />
          </div>
        </div>
      </div>
    )
  );
};

export default Footer;
