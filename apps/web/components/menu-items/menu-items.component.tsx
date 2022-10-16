import Link from 'next/link';
import { useRouter } from 'next/router';

import { EditIcon, HomeIcon, PlusPlusIcon } from 'public/assets';
import { Logo } from 'public/assets/logo';

import { Item, Items, MenuITemsLayout } from './styles';

const MenuItem = () => {
  const { pathname: path } = useRouter();

  const isActive = (pathname: string) => (pathname === path ? 'active' : 'inactive');

  return (
    <MenuITemsLayout>
      <Logo />
      <Items>
        <Item className={isActive('/dashboard')}>
          <HomeIcon width="25"
            height="25"
          />
          <Link href="/dashboard">Dashboard</Link>
        </Item>
        <Item className={isActive('/cadastrar')}>
          <PlusPlusIcon width="25"
            height="25"
          />
          <Link href="/cadastrar">Cadastrar</Link>
        </Item>
        <Item className={isActive('/excluir')}>
          <EditIcon width="25"
            height="25"
          />
          <Link href="/cadastrar">Excluir</Link>
        </Item>
      </Items>
    </MenuITemsLayout>
  );
};

export { MenuItem };
