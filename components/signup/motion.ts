const transition = {
  duration: 0.75,
  type: 'spring',
};

export const variants = {
  hidden: { opacity: 0, height: 0, scale: 0.9 },
  visible: { opacity: 1, height: 'auto', scale: 1 },
  transition,
};
