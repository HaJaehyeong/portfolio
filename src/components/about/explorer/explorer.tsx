import styles from './explorer.module.scss';

type ExplorerProps = {
  subject: string;
};

const Explorer: React.FC<ExplorerProps> = ({ subject }) => {
  return (
    <div className={styles.explorer}>
      <div>{subject}</div>
    </div>
  );
};

export default Explorer;
