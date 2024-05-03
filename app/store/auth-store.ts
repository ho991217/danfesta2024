import { User } from '@/app/api';
import { create } from 'zustand';

type AuthStore = {
  isLoggedIn: boolean;
  userInfo: User | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserInfo: (userInfo: User | null) => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  userInfo: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUserInfo: (userInfo) => set({ userInfo }),
}));

export default useAuthStore;
