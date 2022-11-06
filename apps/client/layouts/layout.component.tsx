import type { FC, ReactNode } from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import * as S from './styles';

type LayoutProps = {
  children: ReactNode,
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Layout>
  );
};

export { Layout };
