import { motion } from 'framer-motion';
import { variants } from './motion';

type Props = {
  onClick: () => void;
  darker?: boolean;
};

export default function Overlay({ onClick, darker }: Props) {
  return (
    <motion.div
      // className={styles.overlay}
      className='fixed inset-0 bg-black backdrop-filter backdrop-blur-sm z-10 brightness-75'
      variants={variants.overlay}
      initial='hidden'
      animate={darker ? 'darker' : 'visible'}
      exit='hidden'
      onClick={onClick}
    />
  );
}
