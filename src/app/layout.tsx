import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.scss';

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
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
