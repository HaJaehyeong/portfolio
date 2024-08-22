import styles from './comments.module.scss';

type CommentsProps = {
  title: string;
  body: string;
};

const Comments: React.FC<CommentsProps> = ({ title, body }) => {
  return (
    <div className={styles.commentsWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default Comments;
