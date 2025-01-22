import { MY_EMAIL, MY_PHONE } from '@/types/constants';
import styles from './info.module.scss';
import { RiArrowDownSFill, RiMailFill, RiPhoneFill } from '@remixicon/react';

const ContactMeInfo: React.FC = () => {
  return (
    <div className={styles['info']}>
      <div>
        <div className={styles['info__contact']}>
          <RiArrowDownSFill color="var(--secondary-white)" size={20} />
          <label className={styles['info__contact__title']}>contacts</label>
        </div>
        <div className={styles['info__datas']}>
          <div className={styles['info__data']}>
            <RiMailFill color="var(--secondary-gray)" size={18} />
            <a href={`mailto:${MY_EMAIL}`}>
              <label>{MY_EMAIL}</label>
            </a>
          </div>
          <div className={styles['info__data']}>
            <RiPhoneFill color="var(--secondary-gray)" size={18} />
            <label>{MY_PHONE}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeInfo;
