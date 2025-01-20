import { RiCloseLine } from '@remixicon/react';
import ContactMeBodyForm from '../body-form/body-form';
import styles from './body.module.scss';

const ContactMeBody: React.FC = () => {
  return (
    <div className={styles['body']}>
      <div className={styles['body__form']}>
        <div className={styles['body__form__tab-wrapper']}>
          <div className={styles['body__form__tab']}>
            <span>cantacts</span>
            <RiCloseLine size={16} color="var(--secondary-gray)" />
          </div>
        </div>
        <div className={styles['body__form-wrapper']}>
          <ContactMeBodyForm />
        </div>
      </div>
      <div>free</div>
    </div>
  );
};

export default ContactMeBody;
