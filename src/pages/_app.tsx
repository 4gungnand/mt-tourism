import '../styles/globals.css';
import '../styles/embla.css'
import '../styles/handleSmoothScroll.tsx'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;