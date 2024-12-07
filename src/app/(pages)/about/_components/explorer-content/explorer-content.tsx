'use client';
import styles from './explorer-content.module.scss';
import { setAboutExplorerDirectoryId } from '@/lib/features/about-explorer-slice';
import { RootState } from '@/lib/store';
import { DIRECTORY_LIST, DIR_COLORS, Directory } from '@/types/constants';
import { RiArrowDownSFill } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DirectoryComponent from '../explorer-directory/explorer-directory';

const ExplorerContentComponent: React.FC = () => {
  const [directories, setDirectories] = useState<Directory[]>([]);
  const dispatch = useDispatch();

  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  useEffect(() => {
    const targetDirectoies = DIRECTORY_LIST.directories.filter(
      (directory) => directory.directoryType === explorerState.type
    );
    if (targetDirectoies) {
      setDirectories(targetDirectoies);
      dispatch(setAboutExplorerDirectoryId(targetDirectoies[0].directoryId));
    }
  }, [explorerState.type, dispatch]);

  const getSubject = () => {
    switch (explorerState.type) {
      case 'terminal':
        return 'professional-info';
      case 'user':
        return 'personal-info';
      case 'gamepad':
        return 'hobbies-info';
    }
  };

  return (
    <>
      <div className={styles.subject}>
        <RiArrowDownSFill color="var(--secondary-white)" size={20} />
        <label className={styles.subjectText}>{getSubject()}</label>
      </div>
      <div>
        <div className={styles.content}>
          <div className={styles.directoriesWrapper}>
            {directories &&
              directories.map((directory, index) => (
                <DirectoryComponent key={directory.directoryId} directory={directory} dirColor={DIR_COLORS[index]} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorerContentComponent;
