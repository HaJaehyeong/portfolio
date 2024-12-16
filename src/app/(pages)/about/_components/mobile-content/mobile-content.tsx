'use client';
import { useSelector } from 'react-redux';
import styles from './mobile-content.module.scss';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { EXPLORER_CONTENTS } from '@/types/constants';

const AboutMobileContent: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  useEffect(() => {
    const targetContent = EXPLORER_CONTENTS.contents.find((content) => {
      if (explorerState.fileId !== undefined) {
        return content.fileId === explorerState.fileId;
      } else {
        return content.directoryId === explorerState.directoryId;
      }
    });

    if (targetContent) {
      setContent(targetContent.content);
    }
  }, [explorerState.directoryId, explorerState.fileId]);

  const getSubject = (explorer: 'terminal' | 'user' | 'gamepad') => {
    switch (explorer) {
      case 'terminal':
        return 'professional-info';
      case 'user':
        return 'personal-info';
      case 'gamepad':
        return 'hobbies-info';
    }
  };

  return (
    <div className={styles['content']}>
      <div className={styles['content__title']}>
        <span>{'// ' + getSubject(explorerState.type)}</span>
        <span className={styles['content__title-sub']}>/ sub-title</span>
      </div>
      <div className={styles['content__body']}>{content}</div>
    </div>
  );
};

export default AboutMobileContent;
