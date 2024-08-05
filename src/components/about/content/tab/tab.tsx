import { useEffect, useState } from 'react';
import styles from './tab.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { DIRECTORY_LIST, Directory } from '@/types/constants';
import { RiCloseLine } from '@remixicon/react';
import { setAboutExplorerDirectoryId, setAboutExplorerFileId } from '@/lib/features/aboutExplorerSlice';

type OpenedContentList = OpenedContent[];

type OpenedContent = {
  title: string;
  directoryId?: number;
  fileId?: number;
};

const AboutContentTab: React.FC = () => {
  const [openedContentList, setOpenedContentList] = useState<OpenedContentList>([]);
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);
  const dispatch = useDispatch();

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

  const handleTabClick = (directoryId?: number, fileId?: number) => {
    dispatch(setAboutExplorerDirectoryId(directoryId));
    dispatch(setAboutExplorerFileId(fileId));
  };

  const handleTabClose = (directoryId?: number, fileId?: number) => {
    const filteredList = openedContentList.filter(
      (content) => content.directoryId !== directoryId || content.fileId !== fileId
    );
    setOpenedContentList(filteredList);

    if (filteredList.length > 0 && explorerState.directoryId === directoryId && explorerState.fileId === fileId) {
      dispatch(setAboutExplorerDirectoryId(filteredList[0].directoryId));
      dispatch(setAboutExplorerFileId(filteredList[0].fileId));
    } else if (filteredList.length === 0) {
      dispatch(setAboutExplorerDirectoryId(undefined));
      dispatch(setAboutExplorerFileId(undefined));
    }
  };

  return (
    <div className={styles.tabWrapper}>
      {openedContentList.length > 0 ? (
        openedContentList.map((content, index) => (
          <div className={styles.tab}>
            <label
              key={content.title + index}
              className={`${styles.tabLabel} ${isActive(content.directoryId, content.fileId) ? styles.active : ''}`}
              onClick={() => handleTabClick(content.directoryId, content.fileId)}
            >
              {content.title}
            </label>
            <RiCloseLine
              size={16}
              color="var(--secondary-gray)"
              onClick={() => handleTabClose(content.directoryId, content.fileId)}
            />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AboutContentTab;
