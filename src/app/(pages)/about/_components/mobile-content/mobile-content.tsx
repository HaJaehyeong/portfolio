'use client';
import { useSelector } from 'react-redux';
import styles from './mobile-content.module.scss';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { DIRECTORY_LIST, EXPLORER_CONTENTS } from '@/types/constants';
import MobileContentBody from '../mobile-content-body/mobile-content-body';

const AboutMobileContent: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  // NOTE(hajae): subtitle로 file이 있으면 fileName, 없으면 dirName
  const getSubTitle = () => {
    const targetDirectory = DIRECTORY_LIST.directories.find((dir) => dir.directoryId === explorerState.directoryId);
    if (targetDirectory) {
      if (explorerState.fileId !== undefined && targetDirectory.files) {
        const targetFile = targetDirectory.files.find((file) => file.fileId === explorerState.fileId);
        if (targetFile) return targetFile.fileName;
      }
      return targetDirectory.directoryName;
    }
    return '';
  };

  // NOTE(hajae): 선택한 dir의 내용을 Find and Set
  const getContent = () => {
    const targetContent = EXPLORER_CONTENTS.contents.find((content) => {
      if (explorerState.fileId !== undefined) {
        return content.fileId === explorerState.fileId;
      } else {
        return content.directoryId === explorerState.directoryId;
      }
    });

    if (targetContent) {
      return targetContent.content.trim().replaceAll(' \n ', '\n');
    }

    return 'Content Not Found';
  };

  useEffect(() => {
    setSubTitle(getSubTitle());
    setContent(getContent());
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
        <span className={styles['content__title-sub']}>/ {subTitle}</span>
      </div>
      <div className={styles['content__body']}>
        {/** NOTE(hajae): dangerouslySetInnerHTML로도 가능하지만 XSS 공격에 노출되기 쉬움 */}
        <MobileContentBody content={content}></MobileContentBody>
      </div>
    </div>
  );
};

export default AboutMobileContent;
