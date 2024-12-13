import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import styles from './layout.module.scss';
import Header from '@/ui/header/header';
import Footer from '@/ui/footer/footer';
import StoreProvider from './storeProvider';
import './globals.scss';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hajae's Portfolio",
  description: 'first portfolio page',
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
            <StoreProvider>{children}</StoreProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
