
import { MenuItem } from '@/components/menu-items';
import { Profile } from '@/components/profile';

import { MenuStore, useMenu } from '../../store';
import { NavBarLayout } from './styles';

const Navbar = () => {
  const { menu } = useMenu() as MenuStore;
  return (
    <NavBarLayout data-menu={menu}>
      <MenuItem />
      <Profile name="Carla" />
    </NavBarLayout>
  )
}

export { Navbar };
