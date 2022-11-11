/* eslint-disable prettier/prettier */
import '../styles/globals.css';
import { useEffect } from 'react';

import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';

import { darkTheme, lightTheme } from 'ui';

import { useTheme, type ThemeStore } from '../store';
import { globalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme() as ThemeStore;

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      globalStyles();
      const currentTheme = theme === 'light' ? lightTheme : darkTheme;
      body.className = currentTheme;
    }
  }, [theme]);

  return <Component {...pageProps} />;
}

export default MyApp;
