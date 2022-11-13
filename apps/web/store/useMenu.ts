import create from 'zustand';
import { persist } from 'zustand/middleware';

type Menu = 'open' | 'closed';

export interface MenuStore {
  menu: Menu;
  setMenu?: (theme: Menu) => void;
}

const useMenu = create(
  persist(
    (set) => ({
      menu: undefined,
      setMenu: (menu: Menu) => set({ menu }),
    }),
    {
      name: 'menu',
      getStorage: () => localStorage,
    }
  )
);

export { useMenu };
