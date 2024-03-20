import { useMemo, useState } from 'react';
import { BottomSheet } from '@/components/common';
import { BottomSheetProps } from '@/components/common/bottom-sheet';

type BottomSheetComponent = ((
  props: Partial<BottomSheetProps>
) => JSX.Element) & {};

export default function useBottomSheet(): [
  BottomSheetComponent,
  () => void,
  () => void
] {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const BottomSheetComponent = useMemo(
    () =>
      Object.assign(function BottomSheetComponent(
        props: Partial<BottomSheetProps>
      ) {
        return <BottomSheet isOpen={isOpen} onDismiss={close} {...props} />;
      },
      {}),
    [isOpen]
  );

  return [BottomSheetComponent, open, close];
}
