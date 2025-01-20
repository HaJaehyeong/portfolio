import { RiCloseLine } from '@remixicon/react';
import styles from './body-form.module.scss';

const ContactMeBodyForm: React.FC = () => {
  return (
    <div className={styles['form']}>
      <div className={styles['form__tab-wrapper']}>
        <div className={styles['form__tab']}>
          <span>cantacts</span>
          <RiCloseLine size={16} color="var(--secondary-gray)" />
        </div>
      </div>
    </div>
  );
};

export default ContactMeBodyForm;
