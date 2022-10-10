import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactNode, useEffect } from 'react';
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
      <Component {...pageProps} id="theme" />
    </div>
  );
}

export default App;
