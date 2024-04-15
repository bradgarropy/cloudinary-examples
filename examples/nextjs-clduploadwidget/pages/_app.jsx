import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import '../styles/globals.css';
import 'next-cloudinary/dist/cld-video-player.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Header />
      <Toaster richColors position="top-right" />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
