import styles from './page.module.scss';
import ContactMeInfo from './_components/info/info';
import ContactMeUrls from './_components/urls/urls';
import ContactMeBody from './_components/body/body';

const ContactMe: React.FC = () => {
  return (
    <div className={styles['contact-me']}>
      <div className={styles['contact-me__infos']}>
        <ContactMeInfo />
        <ContactMeUrls />
      </div>
      <ContactMeBody />
    </div>
  );
};

export default ContactMe;
