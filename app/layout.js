import { Anton, Dela_Gothic_One, Zen_Kaku_Gothic_New } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Motion from './components/Motion';
import './globals.css';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-en', display: 'swap' });
const dela = Dela_Gothic_One({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap', preload: false });
const zen = Zen_Kaku_Gothic_New({ weight: ['400', '700', '900'], subsets: ['latin'], variable: '--font-body', display: 'swap', preload: false });

export const metadata = {
  metadataBase: new URL('https://www.ctof.co.jp'),
  title: { default: '未経験、上等。｜株式会社シートエフ 採用サイト', template: '%s｜株式会社シートエフ 採用サイト' },
  description: '動画編集・Webデザイナー、Webマーケターを未経験から。未経験入社率90%以上、株式会社シートエフの採用サイトです。',
  icons: { icon: '/img/logo.png' },
  // 確認用の公開では検索に載せない
  ...(process.env.NEXT_PUBLIC_REVIEW === '1' && { robots: { index: false, follow: false } }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${anton.variable} ${dela.variable} ${zen.variable}`}>
      <body>
        <Header />
        <Motion />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
