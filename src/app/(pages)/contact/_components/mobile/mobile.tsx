import { RiArrowDownSFill, RiArrowRightSFill, RiMailFill, RiPhoneFill, RiShareBoxLine } from '@remixicon/react';
import styles from './mobile.module.scss';
import ContactMeBodyForm from '../body-form/body-form';
import { useState } from 'react';
import { CONTACT_LINKS, MY_EMAIL, MY_PHONE } from '@/types/constants';
import Link from 'next/link';

const ContactMeMobile: React.FC = () => {
  const [isContactsOpen, setisContactsOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <div className={styles['mobile-contacts']}>
      <div className={styles['mobile-contacts__title']}>_contact-me</div>

      <div className={styles['mobile-contacts__accordion']}>
        <div className={styles['mobile-contacts__accordion__title']} onClick={() => setisContactsOpen((prev) => !prev)}>
          {isContactsOpen ? (
            <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          ) : (
            <RiArrowRightSFill color="var(--secondary-white)" size={20} />
          )}
          <span>contacts</span>
        </div>
        {isContactsOpen && (
          <div className={styles['mobile-contacts__accordion__box']}>
            <div className={styles['mobile-contacts__accordion__item']}>
              <RiMailFill color="var(--secondary-gray)" size={18} />
              <a href={`mailto:${MY_EMAIL}`}>
                <label>{MY_EMAIL}</label>
              </a>
            </div>
            <div className={styles['mobile-contacts__accordion__item']}>
              <RiPhoneFill color="var(--secondary-gray)" size={18} />
              <label>{MY_PHONE}</label>
            </div>
          </div>
        )}
      </div>

      <div className={styles['mobile-contacts__accordion']} onClick={() => setIsLinksOpen((prev) => !prev)}>
        <div className={styles['mobile-contacts__accordion__title']}>
          {isLinksOpen ? (
            <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          ) : (
            <RiArrowRightSFill color="var(--secondary-white)" size={20} />
          )}
          <span>find-me-also-in</span>
        </div>
        {isLinksOpen && (
          <div className={styles['mobile-contacts__accordion__box']}>
            {CONTACT_LINKS.map((link) => (
              <Link key={link.name} href={link.url} className={styles['mobile-contacts__accordion__item']}>
                <RiShareBoxLine size={16} />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <ContactMeBodyForm />
    </div>
  );
};

export default ContactMeMobile;
