export const variants = {
  hidden: { opacity: 0, y: 100, x: '50%' },
  visible: { opacity: 1, y: 0, x: '50%' },
  transition: {
    type: 'spring',
    duration: 0.1,
    stiffness: 200,
    damping: 20,
  },
};
