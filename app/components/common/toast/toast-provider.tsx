'use client';

import useToastStore from '@/app/stores/toast-state';
import Toast from '.';
import { AnimatePresence } from 'framer-motion';

type ToastProviderProps = Readonly<{
  children: React.ReactNode;
}>;

export default function ToastProvider({ children }: ToastProviderProps) {
  const { isOpen, message } = useToastStore();
  return (
    <>
      {children}
      <AnimatePresence>{isOpen && <Toast>{message}</Toast>}</AnimatePresence>
    </>
  );
}
