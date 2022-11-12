import React, { useEffect } from 'react';

import MenuIcon from 'public/assets/menu';
import MenuOpenIcon from 'public/assets/menu-open';
import { DarkIcon, LightIcon } from 'ui';

import { MenuStore, useMenu, useTheme, ThemeStore } from '../../store';
import * as S from './styles';

const Header: React.FC = () => {
  const { menu, setMenu } = useMenu() as MenuStore;
  const { theme, setTheme } = useTheme() as ThemeStore;

  const handleMenu = () => {
    if (setMenu) setMenu(!menu);
  }

  const handleTheme = () => {
    if (setTheme) setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <S.Header>
      <S.RightContainer>
        {menu ? <MenuIcon onClick={handleMenu} /> : <MenuOpenIcon onClick={handleMenu} />}
        <S.Trackd>Trackd</S.Trackd>
      </S.RightContainer>
      <S.Toggle onClick={handleTheme}>
        {theme.match('light') ? <DarkIcon /> : <LightIcon />}
      </S.Toggle>
    </S.Header>
  )
}

export { Header };