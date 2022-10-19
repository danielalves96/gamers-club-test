import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/global';
import '../styles/_app.css';
import { BannedPlayersProvider } from '@/contexts/BannedPlayersContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BannedPlayersProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </BannedPlayersProvider>
  );
}
