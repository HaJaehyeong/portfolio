import { useEffect, useState } from 'react';
import styles from './tab.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { DIRECTORY_LIST } from '@/types/constants';

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
    const targetContent = DIRECTORY_LIST.directories.find(
      (directory) => directory.directoryId === explorerState.directoryId
    );

    if (targetContent) {
      if (explorerState.fileId !== undefined) {
        const targetFile = targetContent.files.find((file) => file.fileId === explorerState.fileId);
        if (targetFile) {
          setOpenedContentList((prev) => [
            ...prev,
            {
              title: targetContent.directoryName + '/' + targetFile.fileName,
              directoryId: targetContent.directoryId,
              fileId: targetFile.fileId,
            },
          ]);
        }
      } else {
        setOpenedContentList((prev) => [
          ...prev,
          {
            title: targetContent.directoryName,
            directoryId: targetContent.directoryId,
          },
        ]);
      }
    }
  }, [explorerState.directoryId, explorerState.fileId]);

  return (
    <div>
      {openedContentList.length &&
        openedContentList.map((content, index) => <div key={content.title + index}>{content.title}</div>)}
    </div>
  );
};

export default AboutContentTab;
