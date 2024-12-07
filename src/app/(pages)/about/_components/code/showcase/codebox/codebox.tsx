'use client';
import Image from 'next/image';
import styles from './codebox.module.scss';
import profileImage from '@/public/images/profile_image.png';
import { RiChatSmile3Fill, RiCloseLine } from '@remixicon/react';
import Star from '@/ui/star/star';
import { useState } from 'react';

type AboutCodeShowcaseCodeBoxProps = {
  children: React.ReactNode;
  detail: string;
};

const AboutCodeShowcaseCodeBox: React.FC<AboutCodeShowcaseCodeBoxProps> = ({ children, detail }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleToggleDetail = () => {
    setShowDetail(!showDetail);
  };

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
          <code onClick={handleToggleDetail}>
            <RiChatSmile3Fill size={14} />
            details
          </code>
          <code>
            <Star fill size={14} />
            starts
          </code>
        </div>
      </div>
      {children}
      {showDetail && (
        <div className={styles.detail}>
          <code>{detail}</code>
          <div onClick={handleToggleDetail}>
            <RiCloseLine size={16} color="var(--secondary-gray)" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCodeShowcaseCodeBox;
