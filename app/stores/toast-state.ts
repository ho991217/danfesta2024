import { create } from 'zustand';

type ToastState = {
  open: (message: string, openFor?: number) => void;
  isOpen: boolean;
  message: string;
};

const useToastStore = create<ToastState>((set) => ({
  isOpen: false,
  message: '',
  open: (message, openFor = 2000) => {
    if (message.length > 30) {
      throw new Error('메시지는 30자 이하로 입력해주세요.');
    }
    set({ isOpen: true, message });
    setTimeout(() => {
      set({ isOpen: false, message: '' });
    }, openFor);
  },
}));

export default useToastStore;
