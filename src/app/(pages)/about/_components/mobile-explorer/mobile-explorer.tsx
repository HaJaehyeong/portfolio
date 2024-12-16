import { DIRECTORY_LIST, DIR_COLORS, Directory, EXPLORER_LIST } from '@/types/constants';
import styles from './mobile-explorer.module.scss';
import { RiArrowDownSFill, RiArrowRightSFill } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setAboutExplorerDirectoryId, setAboutExplorerType } from '@/lib/features/about-explorer-slice';
import DirectoryComponent from '../explorer-directory/explorer-directory';

const AboutMobileExplorer: React.FC = () => {
  const [directories, setDirectories] = useState<Directory[]>([]);
  const dispatch = useDispatch();

  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);

  const handleExplorerClick = (explorer: 'terminal' | 'user' | 'gamepad') => {
    dispatch(setAboutExplorerType(explorer));
  };

  useEffect(() => {
    const targetDirectoies = DIRECTORY_LIST.directories.filter(
      (directory) => directory.directoryType === explorerState.type
    );
    if (targetDirectoies) {
      setDirectories(targetDirectoies);
      dispatch(setAboutExplorerDirectoryId(targetDirectoies[0].directoryId));
    }
  }, [explorerState.type, dispatch]);

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
    <div className={styles['mobile-explorer']}>
      <div className={styles['mobile-explorer__tab']}>
        {EXPLORER_LIST.map((explorer) => (
          <div key={explorer} className={styles['mobile-explorer__tab__accordion']}>
            <div
              className={styles['mobile-explorer__tab__accordion-title']}
              onClick={() => handleExplorerClick(explorer as 'terminal' | 'user' | 'gamepad')}
            >
              {explorerState.type === explorer ? (
                <RiArrowDownSFill color="var(--secondary-white)" size={20} />
              ) : (
                <RiArrowRightSFill color="var(--secondary-white)" size={20} />
              )}
              {getSubject(explorer as 'terminal' | 'user' | 'gamepad')}
            </div>
            {explorerState.type === explorer && (
              <div className={styles['mobile-explorer__tab__accordion-directories']}>
                <div className={styles['mobile-explorer__tab__accordion-directories__item']}>
                  {directories &&
                    directories.map((directory, index) => (
                      <DirectoryComponent
                        key={directory.directoryId}
                        directory={directory}
                        dirColor={DIR_COLORS[index]}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMobileExplorer;
