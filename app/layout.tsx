import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'MMP 網站應用開發團隊',
  description: 'MMP 網站應用開發團隊',
  // icons: {
  //   icon: 'https://img.bc3ts.net/image/web/main/favicon.ico',
  //   apple: 'https://img.bc3ts.net/image/web/main/favicon.ico',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
