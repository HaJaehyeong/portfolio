import styles from './page.module.scss';
import ContactMeInfo from './_components/info/info';
import ContactMeUrls from './_components/urls/urls';
import ContactMeBody from './_components/body/body';
import ContactMeContainer from './_components/container/container';

const ContactMe: React.FC = () => {
  return (
    <div className={styles['contact-me']}>
      <ContactMeContainer>
        <div className={styles['contact-me__infos']}>
          <ContactMeInfo />
          <ContactMeUrls />
        </div>
        <ContactMeBody />
      </ContactMeContainer>
    </div>
  );
};

export default ContactMe;
