import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import styles from './layout.module.scss';
import './globals.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hajae's Portfolio",
  description: 'first portfolio page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={firaCode.className}>
        <div className={styles.pageWrapper}>
          <div className={styles.mainWrapper}>
            <div className={styles.backgroundBlurs}>
              <div className={`${styles.position1} ${styles.green}`} />
              <div className={`${styles.position2} ${styles.green}`} />
              <div className={`${styles.position3} ${styles.blue}`} />
              <div className={`${styles.position4} ${styles.blue}`} />
            </div>
            <Header name="Jaehyeong-Ha 😎" />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
