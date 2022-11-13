/* eslint-disable prettier/prettier */
import { DarkIcon, LightIcon, useMount } from 'ui';

import { useTheme, type ThemeStore } from '../../store';
import * as S from './styles';

const Header = () => {
  const { theme, setTheme } = useTheme() as ThemeStore;
  const { isMounted } = useMount();

  if (!isMounted) return null;

  const handleTheme = () => {
    if (setTheme) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <S.Header>
      <S.Trackd>Trackd</S.Trackd>
      <S.DarkMode type="button" onClick={handleTheme}>
        {theme === 'light' ? <DarkIcon /> : <LightIcon />}
      </S.DarkMode>
    </S.Header>
  );
};

export default Header;
