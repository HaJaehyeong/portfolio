import CtaButton from '@/ui/cta-button/cta-button';
import styles from './body-form.module.scss';

const ContactMeBodyForm: React.FC = () => {
  return (
    <form action="/" className={styles['form']}>
      <div className={styles['form__item']}>
        <label htmlFor="">_name</label>
        <input type="text" required />
      </div>
      <div className={styles['form__item']}>
        <label htmlFor="">_email</label>
        <input type="email" required />
      </div>
      <div className={styles['form__item']}>
        <label htmlFor="">_message</label>
        <textarea required />
      </div>
      <div>
        <CtaButton value="submit-message" />
      </div>
    </form>
  );
};

export default ContactMeBodyForm;
