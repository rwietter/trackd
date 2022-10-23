import '../styles/globals.css';
import '../styles/table.css';
import 'antd/dist/antd.css';

import { ReactNode, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

import { darkTheme, globalStyles, lightTheme } from '../features/ui/theme';

function App({ Component, pageProps }: AppProps): ReactNode {
  const theme = 'light';
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    globalStyles();
    const classTheme = document.querySelector('#theme');
    if (!classTheme) return;
    classTheme.className = themeMode;
  }, [themeMode]);

  return (
    <div>
      <Component {...pageProps}
        id="theme"
      />
      <Toaster />
    </div>
  );
}

export default App;
