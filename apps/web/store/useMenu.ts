import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface MenuStore {
  menu: boolean;
  setMenu?: (theme: boolean) => void;
}

const useMenu = create(
  persist(
    (set) => ({
      menu: false,
      setMenu: (menu: MenuStore) => set({ menu }),
    }),
    {
      name: 'menu',
      getStorage: () => localStorage,
    }
  )
);

export { useMenu };
