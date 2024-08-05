import { useEffect, useState } from 'react';
import styles from './tab.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { DIRECTORY_LIST, Directory } from '@/types/constants';
import { RiCloseLine } from '@remixicon/react';

type OpenedContentList = OpenedContent[];

type OpenedContent = {
  title: string;
  directoryId?: number;
  fileId?: number;
};

const AboutContentTab: React.FC = () => {
  const [openedContentList, setOpenedContentList] = useState<OpenedContentList>([]);
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  useEffect(() => {
    const targetContent = findTargetContent();
    if (targetContent) {
      if (explorerState.fileId !== undefined) {
        handleFileOpen(targetContent);
      } else {
        handleDirectoryOpen(targetContent);
      }
    }
  }, [explorerState.directoryId, explorerState.fileId]);

  const findTargetContent = () => {
    return DIRECTORY_LIST.directories.find((directory) => directory.directoryId === explorerState.directoryId);
  };

  const handleFileOpen = (targetContent: Directory) => {
    const targetFile = targetContent.files.find((file) => file.fileId === explorerState.fileId);
    if (targetFile) {
      const newContent = {
        title: `${targetContent.directoryName}/${targetFile.fileName}`,
        directoryId: targetContent.directoryId,
        fileId: targetFile.fileId,
      };
      if (!isContentOpened(newContent)) {
        setOpenedContentList((prev) => [...prev, newContent]);
      }
    }
  };

  const handleDirectoryOpen = (targetContent: Directory) => {
    const newContent = {
      title: targetContent.directoryName,
      directoryId: targetContent.directoryId,
    };
    if (!isContentOpened(newContent)) {
      setOpenedContentList((prev) => [...prev, newContent]);
    }
  };

  const isContentOpened = (newContent: OpenedContent) => {
    return openedContentList.some(
      (content) => content.directoryId === newContent.directoryId && content.fileId === newContent.fileId
    );
  };

  const isActive = (directoryId?: number, fileId?: number) => {
    if (fileId !== undefined) {
      return explorerState.directoryId === directoryId && explorerState.fileId === fileId;
    }
    return explorerState.directoryId === directoryId && explorerState.fileId === undefined;
  };

  return (
    <div className={styles.tabWrapper}>
      {openedContentList.length &&
        openedContentList.map((content, index) => (
          <div className={styles.tab}>
            <label
              key={content.title + index}
              className={`${styles.tabLabel} ${isActive(content.directoryId, content.fileId) ? styles.active : ''}`}
            >
              {content.title}
            </label>
            <RiCloseLine size={16} color="var(--secondary-gray)" />
          </div>
        ))}
    </div>
  );
};

export default AboutContentTab;
