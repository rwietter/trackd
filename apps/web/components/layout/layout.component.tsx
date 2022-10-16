import { FC, ReactNode } from 'react';

import { Navbar } from '@/components/navbar';

import { Wrapper, LayoutCss } from './styles';

type IProps = {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => (
  <Wrapper>
    <Navbar />
    <LayoutCss>{ children }</LayoutCss>
  </Wrapper>
);

export { Layout };
