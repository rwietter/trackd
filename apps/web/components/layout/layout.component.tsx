import { FC, ReactNode } from 'react';

import { Navbar } from '@/components/navbar';
import { useMount } from '@/hooks/useMount';

import { useMenu, MenuStore } from '../../store';
import { Header } from '../header';
import { Spinner } from '../spinner';
import { Wrapper, LayoutCss } from './styles';

type IProps = {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const { menu } = useMenu() as MenuStore;
  const { isMounted } = useMount();

  if (!isMounted) return <Spinner center size='small' />

  return (
    <Wrapper>
      <Header />
      <Navbar />
      <LayoutCss data-menu={menu}>{children}</LayoutCss>
    </Wrapper>
  )
};

export { Layout };
