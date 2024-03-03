'use client';

import { TicketTile } from '@components/home';
import useBottomSheet from './hooks/useBottomSheet';
import { BottomSheet } from './components';

export default function Home() {
  const { open, close, isOpen } = useBottomSheet();
  return (
    <main>
      <TicketTile />
      <button onClick={open}>Open bottom sheet</button>
      <BottomSheet isOpen={isOpen} onDismiss={close}>
        <div>Bottom sheet content</div>
      </BottomSheet>
    </main>
  );
}
