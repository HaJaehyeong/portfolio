import styles from './body.module.scss';

const ContactMeBody: React.FC = () => {
  return (
    <div className={styles['body']}>
      <div className={styles['body__form']}>form</div>
      <div>free</div>
    </div>
  );
};

export default ContactMeBody;
