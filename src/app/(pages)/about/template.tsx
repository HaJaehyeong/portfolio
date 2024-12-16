'use client';
import LoadingSpinner from '@/app/_components/loading-spinner/loading-spinner';
import { useEffect, useState } from 'react';

type AboutMeTemplateProps = {
  children: React.ReactNode;
};

const AboutMeTemplate: React.FC<AboutMeTemplateProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default AboutMeTemplate;
