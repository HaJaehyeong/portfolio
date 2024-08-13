import Image from 'next/image';
import styles from './codebox.module.scss';
import profileImage from '@/public/images/profile_image.png';
import { RiChatSmile3Fill } from '@remixicon/react';
import Star from '@/components/star/star';

type AboutCodeShowcaseCodeBoxProps = {
  code: React.ReactNode;
};

const AboutCodeShowcaseCodeBox: React.FC<AboutCodeShowcaseCodeBoxProps> = ({ code }) => {
  return (
    <div className={styles.codeboxWrapper}>
      <div className={styles.info}>
        <div className={styles.writer}>
          <div>
            <Image className={styles.profileImage} src={profileImage.src} width={36} height={36} alt="profile_image" />
          </div>
          <div>
            <code className={styles.name}>@hajae305</code>
            <div>Craeted 5 days ago</div>
          </div>
        </div>
        <div className={styles.postInfo}>
          <code>
            <RiChatSmile3Fill size={14} />
            details
          </code>
          <code>
            <Star fill size={14} />
            starts
          </code>
        </div>
      </div>
      {code}
    </div>
  );
};

export default AboutCodeShowcaseCodeBox;
