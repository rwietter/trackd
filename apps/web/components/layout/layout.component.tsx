import { FC, ReactNode } from 'react';

import { Navbar } from '@/components/navbar';

import { useMenu, MenuStore } from '../../store';
import { Header } from '../header';
import { Wrapper, LayoutCss } from './styles';

type IProps = {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const { menu } = useMenu() as MenuStore;
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <LayoutCss data-menu={menu}>{children}</LayoutCss>
    </Wrapper>
  )
};

export { Layout };
