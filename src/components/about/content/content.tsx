import { useSelector } from 'react-redux';
import styles from './content.module.scss';
import { RootState } from '@/lib/store';
import { useEffect, useState } from 'react';
import { EXPLORER_CONTENTS } from '@/types/constants';
import AboutContentTab from './tab/tab';

const AboutContent: React.FC = () => {
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

  return (
    <div className={styles.contentWrapper}>
      <AboutContentTab />
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default AboutContent;
