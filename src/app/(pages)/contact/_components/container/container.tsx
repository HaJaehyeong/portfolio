'use client';
import styles from './container.module.scss';
import LoadingSpinner from '@/app/_components/loading-spinner/loading-spinner';
import useWindowSize from '@/hooks/useWindowSize';
import ContactMeMobile from '../mobile/mobile';

type ContactMeContainerProps = {
  children: React.ReactNode;
};

const ContactMeContainer: React.FC<ContactMeContainerProps> = ({ children }) => {
  const { width } = useWindowSize();
  const isMobileSize = width <= 767;

  if (width === 0) {
    return <LoadingSpinner />;
  }

  return isMobileSize ? (
    <div className={styles['mobile-container']}>
      <ContactMeMobile />
    </div>
  ) : (
    <>{children}</>
  );
};

export default ContactMeContainer;
