import { ToastType } from '@/components/common/toast';
import { create } from 'zustand';

type OpenOptions = {
  openFor?: number;
  type?: ToastType;
};

type ToastState = {
  open: (message: string, options?: OpenOptions) => void;
  isOpen: boolean;
  message: string;
  type: ToastType;
};

const useToastStore = create<ToastState>((set) => ({
  isOpen: false,
  message: '',
  type: 'error',
  open: (message, options) => {
    const type = options?.type || 'error';
    const openFor = options?.openFor || 3000;

    set({ isOpen: true, message, type: type });
    setTimeout(() => {
      set({ isOpen: false, message: '' });
    }, openFor);
  },
}));

export default useToastStore;
