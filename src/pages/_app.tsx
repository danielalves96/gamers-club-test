import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/global';
import '../styles/_app.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
