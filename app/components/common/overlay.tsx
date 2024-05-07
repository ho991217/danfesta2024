import { motion } from 'framer-motion';

import { variants } from './bottom-sheet/motion';

type Props = {
  onClick: () => void;
  darker?: boolean;
};

export default function Overlay({ onClick, darker }: Props) {
  return (
    <motion.div
      className="fixed inset-0 bg-black backdrop-filter backdrop-blur-sm z-20 brightness-75 touch-none"
      variants={variants.overlay}
      initial="hidden"
      animate={darker ? 'darker' : 'visible'}
      exit="hidden"
      onClick={onClick}
    />
  );
}
