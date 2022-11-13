/* eslint-disable import-helpers/order-imports */
import React from 'react';

import MenuIcon from 'public/assets/menu';
import MenuOpenIcon from 'public/assets/menu-open';
import { DarkIcon, LightIcon } from 'ui';
import { useMount } from '@/hooks/useMount';

import { MenuStore, useMenu, useTheme, ThemeStore } from '../../store';
import * as S from './styles';

const Header: React.FC = () => {
  const { isMounted } = useMount();
  const { menu, setMenu } = useMenu() as MenuStore;
  const { theme, setTheme } = useTheme() as ThemeStore;

  const handleMenu = () => {
    if (setMenu) setMenu(menu === 'open' ? 'closed' : 'open');
  }

  const handleTheme = () => {
    if (setTheme) setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (!isMounted) return <div />

  const MenuIconComponent = !menu || menu === 'open' ? MenuOpenIcon : MenuIcon;

  return (
    <S.Header>
      <S.RightContainer>
        <MenuIconComponent onClick={handleMenu} />
        <S.Trackd>Trackd</S.Trackd>
      </S.RightContainer>
      <S.Toggle onClick={handleTheme}>
        {theme.match('light') ? <DarkIcon /> : <LightIcon />}
      </S.Toggle>
    </S.Header>
  )
}

export { Header };