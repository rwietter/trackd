import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeStore {
  theme: 'dark' | 'light';
  setTheme?: (theme: 'dark' | 'light') => void;
}

const useTheme = create(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (newTheme: ThemeStore) => set({ theme: newTheme }),
    }),
    {
      name: 'theme',
      getStorage: () => localStorage,
    }
  )
);

export { useTheme };
