'use client';

import useToastStore from '@/stores/toast-state';
import Toast from '.';
import { AnimatePresence } from 'framer-motion';

type ToastProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export default function ToastProvider({ children }: ToastProviderProps) {
  const { isOpen, message, type } = useToastStore();
  return (
    <>
      {children}
      <AnimatePresence>{isOpen && <Toast type={type}>{message}</Toast>}</AnimatePresence>
    </>
  );
}
