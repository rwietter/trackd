import '../styles/globals.css';
import '../styles/table.css';
import 'antd/dist/antd.css';

import { ReactNode, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

import { darkTheme, lightTheme } from 'ui';

import { globalStyles } from '../features/ui/theme';
import { ThemeStore, useTheme } from '../store';

function App({ Component, pageProps }: AppProps): ReactNode {
  const { theme } = useTheme() as ThemeStore;

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      globalStyles();
      const currentTheme = theme === 'light' ? lightTheme : darkTheme;
      body.className = currentTheme;
    }
  }, [theme]);

  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}

export default App;
