import { SOCIAL_MEDIAS, SocialMediaType } from '@/types/constants';
import SocialMedia from '../socialMedia/socialMedia';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.findMe}>find me in: </div>
      <div className={styles.others}>
        <div className={styles.socialIconWrapper}>
          {SOCIAL_MEDIAS.map((media) => (
            <div className={styles.socialIcon}>
              <SocialMedia value={media as SocialMediaType} />
            </div>
          ))}
        </div>
        <div className={styles.github}>
          @HaJaehyeong <SocialMedia value="github" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
