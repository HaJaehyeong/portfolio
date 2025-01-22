'use client';

import useWindowSize from '@/hooks/useWindowSize';

type ContactMeContainerProps = {
  children: React.ReactNode;
};

const ContactMeContainer: React.FC<ContactMeContainerProps> = ({ children }) => {
  const { width } = useWindowSize();
  const isMobileSize = width <= 767;

  return isMobileSize ? <>Mobile page</> : <>{children}</>;
};

export default ContactMeContainer;
