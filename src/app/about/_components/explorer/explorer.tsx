import { RiArrowDownSFill, RiMailFill, RiPhoneFill } from '@remixicon/react';
import styles from './explorer.module.scss';
import { DIRECTORY_LIST, DIR_COLORS, Directory, MY_EMAIL, MY_PHONE } from '@/types/constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setAboutExplorerDirectoryId } from '@/lib/features/aboutExplorerSlice';
import DirectoryComponent from './directory/directory';

const AboutExplorer: React.FC = () => {
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
  }, [explorerState.type]);

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
    <div className={styles.explorer}>
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
      <div>
        <div className={styles.contactMe}>
          <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          <label className={styles.contactMeSubject}>contact me</label>
        </div>
        <div className={styles.contactMeInfo}>
          <div className={styles.info}>
            <RiMailFill color="var(--secondary-gray)" size={18} />
            <label>{MY_EMAIL}</label>
          </div>
          <div className={styles.info}>
            <RiPhoneFill color="var(--secondary-gray)" size={18} />
            <label>{MY_PHONE}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExplorer;
