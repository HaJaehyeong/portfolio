'use client';
import useWindowSize from '@/hooks/useWindowSize';
import AboutCode from './_components/code/code';
import AboutContent from './_components/content/content';
import AboutExplorer from './_components/explorer/explorer';
import AboutSideNav from './_components/side-nav/side-nav';
import styles from './page.module.scss';
import AboutMobileContainer from './_components/mobile-container/mobile-container';
import LoadingSpinner from '@/app/_components/loading-spinner/loading-spinner';

const AboutMe: React.FC = () => {
  // NOTE(hajae): 서버컴포넌트에서 아래와 같이 모바일인지 확인하는 방법도 있지만,
  // 해당 웹페이지 규모가 크지않고, 브라우저 자체를 작게 조절할 경우 반응하지 않으므로 viewport를 사용하여 반응형 웹을 작성
  // const userAgent = (await headers()).get('user-agent') || '';
  // const isMobile = /Mobi|Android/i.test(userAgent);
  const { width } = useWindowSize();

  // NOTE(hajae): mobile보다 작을 때만 Footer 표시 위해
  const isMobileSize = width <= 767;

  if (width === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles['about-me']}>
      {isMobileSize ? (
        <AboutMobileContainer />
      ) : (
        <>
          <AboutSideNav />
          <AboutExplorer />
          <AboutContent />
          <AboutCode />
        </>
      )}
    </div>
  );
};

export default AboutMe;
