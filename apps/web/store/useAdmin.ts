import create from 'zustand';

const initialState = {
  name: '',
  username: '',
  email: '',
  phone: '',
  state: '',
  updatedAt: '',
  city: '',
  work: '',
} as Admin

export interface AdminStore {
  admin: Admin;
  setAdmin: (newUser: Admin) => void;
}

const useAdmin = create(
  (set) => ({
    admin: initialState,
    setAdmin: (newAdmin: Admin) => set({ 
      admin: newAdmin,
    })
  }),
);

export { useAdmin };
