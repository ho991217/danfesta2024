import { create } from 'zustand';

type AuthStore = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));

export default useAuthStore;
