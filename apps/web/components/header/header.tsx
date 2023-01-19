/* eslint-disable react/require-default-props */
/* eslint-disable import-helpers/order-imports */
import { FC } from 'react';

import { DarkIcon, LightIcon } from 'ui';
import { useRouter } from 'next/router';
import { useMount } from '@/hooks/useMount';

import { MenuStore, useMenu, useTheme, ThemeStore } from '../../store';
import * as S from './styles';

type Props = {
  withMenu?: boolean;
  url?: '/dashboard' | '/' | '/sign' | '/editar' | '/admin' | '/cadastrar';
}

const Header: FC<Props> = ({ withMenu = true, url = '/dashboard' }) => {
  const { isMounted } = useMount();
  const { menu, setMenu } = useMenu() as MenuStore;
  const { theme, setTheme } = useTheme() as ThemeStore;
  const router = useRouter();

  const handleMenu = () => {
    if (setMenu) setMenu(menu === 'open' ? 'closed' : 'open');
  }

  const handleTheme = () => {
    if (setTheme) setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (!isMounted) return <div />

  const MenuIconComponent = !menu || menu === 'open' ? S.MenuOpen : S.MenuClose;

  const handleNavigation = () =>  router.push(url);

  return (
    <S.Header>
      <S.RightContainer>
        { withMenu && <MenuIconComponent onClick={handleMenu} /> }
        <S.Trackd
          role="button"
          onClick={handleNavigation}
        >Trackd</S.Trackd>
      </S.RightContainer>
      <S.Toggle onClick={handleTheme}>
        {theme.match('light') ? <DarkIcon /> : <LightIcon />}
      </S.Toggle>
    </S.Header>
  )
}

export { Header };