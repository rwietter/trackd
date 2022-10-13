import { MenuItem } from '@/components/menu-items';
import { Profile } from '@/components/profile';

import { NavBarLayout } from './styles';

const Navbar = () => (
  <NavBarLayout>
    <MenuItem />
    <Profile name="Carla" />
  </NavBarLayout>
);

export { Navbar };
