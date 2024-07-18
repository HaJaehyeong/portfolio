import { Enums } from '@/enums/enums';
import styles from './socialMedia.module.scss';

type SocialMediaProps = {
  value: 'github' | 'blog' | 'insta';
  size?: number;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ value, size = 24 }) => {
  const socialMedia = Enums.SocialMedia.valueOf(value);

  if (!socialMedia) return <></>;

  return <socialMedia.icon color="var(--secondary-gray)" size={size} className={styles.socialMediaWrapper} />;
};

export default SocialMedia;
