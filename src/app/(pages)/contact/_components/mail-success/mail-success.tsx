import CtaButton from '@/ui/cta-button/cta-button';
import styles from './mail-success.module.scss';

type ContactMeMailSuccessProps = {
  onBackClick: () => void;
};

const ContactMeMailSuccess: React.FC<ContactMeMailSuccessProps> = ({ onBackClick }) => {
  return (
    <div className={styles['mail-send-success']}>
      <h2>Thank you! 🤘</h2>
      <p>Your message has been accepted. You will recieve answer really soon!</p>
      <CtaButton value="send-new-message" onClick={onBackClick} />
    </div>
  );
};

export default ContactMeMailSuccess;
