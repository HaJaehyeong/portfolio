import Link from 'next/link';
import styles from './urls.module.scss';
import { RiArrowDownSFill, RiShareBoxLine } from '@remixicon/react';
import { CONTACT_LINKS } from '@/types/constants';

const ContactMeUrls: React.FC = () => {
  return (
    <div className={styles['urls']}>
      <div>
        <div className={styles['urls__title']}>
          <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          <label className={styles['urls__title-text']}>find-me-also-in</label>
        </div>
        <div className={styles['urls__links']}>
          {CONTACT_LINKS.map((link) => (
            <Link key={link.name} href={link.url} className={styles['urls__links__link']}>
              <RiShareBoxLine size={16} />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMeUrls;
