import ContactMeBodyForm from '../body-form/body-form';
import styles from './body.module.scss';

const ContactMeBody: React.FC = () => {
  return (
    <div className={styles['body']}>
      <div className={styles['body__form']}>
        <ContactMeBodyForm />
      </div>
      <div>free</div>
    </div>
  );
};

export default ContactMeBody;
