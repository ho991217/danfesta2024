export const variants = {
  button: {
    initial: {
      scale: 1,
    },
    active: {
      scale: 0.99,
    },
    activeTransparent: {
      scale: 0.99,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      duration: 0.01,
    },
  },
  input: {
    initial: {
      scale: 1,
      filter: 'brightness(1)',
    },
    active: {
      scale: 0.99,
      filter: 'brightness(0.95)',
    },
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      duration: 0.01,
    },
  },
};
