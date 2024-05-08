import { useState } from 'react';

export default function useBottomSheet(): [
  isOpen: boolean,
  open: () => void,
  close: () => void,
] {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return [isOpen, open, close];
}
