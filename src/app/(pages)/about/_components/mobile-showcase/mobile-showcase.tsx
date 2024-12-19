import Image from 'next/image';
import profileImage from '/public/images/profile_image.png';
import styles from './mobile-showcase.module.scss';
import { RiChatSmile3Fill } from '@remixicon/react';
import { useState } from 'react';

const AboutMobileShowcase: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleToggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className={styles['showcase']}>
      <span>{'// Code snippet showcase:'}</span>
      <div className={styles['showcase__user']}>
        <Image
          src={profileImage.src}
          className={styles['showcase__user__profile-image']}
          width={36}
          height={36}
          alt="profile_image"
        />
        <div className={styles['showcase__user__info']}>
          <code className={styles['showcase__user__info-name']}>@hajae305</code>
          <div className={styles['showcase__user__info-created-at']}>Craeted 5 days ago</div>
        </div>
        <code onClick={handleToggleDetail} className={styles['showcase__toggle']}>
          <RiChatSmile3Fill size={14} className={styles['showcase__toggle-icon']} />
          details
        </code>
      </div>
    </div>
  );
};

export default AboutMobileShowcase;
