'use client';
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

  return isMobileSize ? <ContactMeMobile /> : <>{children}</>;
};

export default ContactMeContainer;
