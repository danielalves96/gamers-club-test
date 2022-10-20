import { BannedPlayersProvider } from '@/contexts/BannedPlayersContext';
import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app';
import '../i18n';
import '../styles/_app.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BannedPlayersProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </BannedPlayersProvider>
  );
}
