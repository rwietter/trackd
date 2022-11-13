import { MenuItem } from '@/components/menu-items';
import { Profile } from '@/components/profile';
import { useMount } from '@/hooks/useMount';

import { MenuStore, useMenu } from '../../store';
import { Spinner } from '../spinner';
import { NavBarLayout } from './styles';

const Navbar = () => {
  const { menu } = useMenu() as MenuStore;
  const { isMounted } = useMount();

  if (!isMounted) return <Spinner center size='small' />

  return (
    <NavBarLayout data-menu={menu}>
      <MenuItem />
      <Profile name="Carla" />
    </NavBarLayout>
  )
}

export { Navbar };
