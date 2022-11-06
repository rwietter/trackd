import '../styles/globals.css';
import { useEffect } from 'react';

import type { AppProps } from 'next/app';

import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.className = globalStyles();
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
