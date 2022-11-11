/* eslint-disable prettier/prettier */
import { DarkIcon, LightIcon } from 'ui';

import { Logo } from '../../assets';
import { useTheme, type ThemeStore } from '../../store';
import * as S from './styles';

const handleTheme = (props: ThemeStore) => {
  if (props.setTheme) {
    props.setTheme(props.theme === 'light' ? 'dark' : 'light');
  }
};

const Header = () => {
  const { theme, setTheme } = useTheme() as ThemeStore;

  return (
    <S.Header>
      <Logo />
      <S.DarkMode type="button" onClick={() => handleTheme({ theme, setTheme })}>
        {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
      </S.DarkMode>
    </S.Header>
  );
};

export default Header;
