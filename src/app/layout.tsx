import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});
export const metadata: Metadata = {
  title: 'Skills Water',
  description: 'Learn Humanities, Technology and English',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'
        />
        <link
          rel='stylesheet'
          href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'
        />
      </head>
      <body className={`${poppins.className} bg-slate-50 dark:bg-darkmode `}>
        <Providers attribute='class' defaultTheme='system' enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
