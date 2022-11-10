import type { FC, ReactNode } from 'react';

import dynamic from 'next/dynamic';

import * as S from './styles';

const Footer = dynamic(() => import('../components/footer/footer.component'), {
  loading: () => <p>...</p>,
});

const Header = dynamic(() => import('../components/header/header.component'), {
  loading: () => <p>...</p>,
});

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

export default Layout;
