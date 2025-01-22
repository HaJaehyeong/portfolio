import styles from './mail-template.module.scss';

const ContactMeMailTemplate: React.FC = () => {
  return (
    <div className={styles['mail-template']}>
      <h2>Mail Template</h2>
      <div className={styles['mail-template__body']}>
        <span>발신자 성함 : {'{{from_name}}'}</span>
        <span>발신자 메일 : {'{{from_mail}}'}</span>
        <div className={styles['mail-template__body__message']}>
          <div className={styles['mail-template__body__message-bar']} />
          <span>{'{{message}}'}</span>
        </div>
      </div>
      <div className={styles['mail-template__to']}>
        <h3>발신처 정보</h3>
        <div className={styles['mail-template__to-name']}>
          <span>To:</span>
          <span className={styles['mail-template__to-name__body']}>Ha Jaehyeong</span>
        </div>
        <div className={styles['mail-template__to-email']}>
          <span>Email:</span>
          <span className={styles['mail-template__to-email__body']}>hajae305@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactMeMailTemplate;
