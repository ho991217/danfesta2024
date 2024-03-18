import { motion } from 'framer-motion';

type PropsWithChildren = { children?: React.ReactNode };

export default function Header({ children }: PropsWithChildren) {
  return <header className='flex flex-col gap-2 mb-10 mt-6'>{children}</header>;
}

Header.Title = function Title({ children }: PropsWithChildren) {
  return <h1 className='text-[27px] font-bold'>{children}</h1>;
};

Header.Subtitle = function Subtitle({ children }: PropsWithChildren) {
  return <div className='text-base flex'>{children}</div>;
};

export function TransformerSubtitle({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ y: '-20%', opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: 'spring' }}
    >
      {text}
    </motion.div>
  );
}
