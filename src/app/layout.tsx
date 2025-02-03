import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import styles from './layout.module.scss';
import Header from '@/ui/header/header';
import Footer from '@/ui/footer/footer';
import StoreProvider from './storeProvider';
import profileImage from '/public/images/profile_image.png';
import './globals.scss';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hajae's Portfolio",
  description: 'first portfolio page',
  openGraph: {
    title: "Hajae's Portfolio",
    description: 'GitHub Pages에서 호스팅된 Portfolio',
    url: 'https://hajaehyeong.github.io',
    siteName: "Hajae's Portfolio",
    images: [
      {
        url: profileImage.src,
        width: 1200,
        height: 630,
        alt: 'Portfolio Thumbnail',
      },
    ],
    type: 'website',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ko">
      <body className={firaCode.className}>
        <div className={styles['page']}>
          <div className={styles['page__main']}>
            <Header name="Jaehyeong-Ha 😎" />
            <div className={styles['page__main__body']}>
              <StoreProvider>{children}</StoreProvider>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
