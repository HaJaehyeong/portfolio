import { RiArrowDownSLine, RiArrowRightSLine, RiFolder3Fill, RiMarkdownFill } from '@remixicon/react';
import styles from './directory.module.scss';
import { Directory } from '@/types/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setAboutExplorerDirectoryId, setAboutExplorerFileId } from '@/lib/features/aboutExplorerSlice';

type DirectoryComponentProps = {
  directory: Directory;
  dirColor: string;
};

const DirectoryComponent: React.FC<DirectoryComponentProps> = ({ directory, dirColor }) => {
  const dispatch = useDispatch();
  const explorerState = useSelector((state: RootState) => state.aboutExplorerReducer);
  const isOpen = explorerState.directoryId === directory.directoryId;

  const handleDirectoryClick = () => {
    dispatch(setAboutExplorerDirectoryId(directory.directoryId));
    dispatch(setAboutExplorerFileId(undefined));
  };
  const handleFileClick = (fileId: number) => {
    dispatch(setAboutExplorerDirectoryId(directory.directoryId));
    dispatch(setAboutExplorerFileId(fileId));
  };

  return (
    <div className={styles.directoryWrapper}>
      <div className={styles.directory} onClick={handleDirectoryClick}>
        {isOpen ? (
          <RiArrowDownSLine size={16} color="var(--secondary-white)" />
        ) : (
          <RiArrowRightSLine size={16} color="var(--secondary-gray)" />
        )}
        <RiFolder3Fill size={16} color={dirColor} />
        <label className={isOpen ? styles.open : ''}>{directory.directoryName}</label>
      </div>
      {isOpen &&
        directory.files &&
        directory.files.map((file) => (
          <div key={file.fileName + file.fileId} className={styles.file} onClick={() => handleFileClick(file.fileId)}>
            <RiMarkdownFill size={16} color="var(--secondary-gray)" />
            <label className={explorerState.fileId === file.fileId ? styles.open : ''}>{file.fileName}</label>
          </div>
        ))}
    </div>
  );
};

export default DirectoryComponent;
