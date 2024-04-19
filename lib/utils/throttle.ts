const throttle = (callback: () => void) => {
  let throttleId: NodeJS.Timeout | null = null;

  return () => {
    if (throttleId) return;

    throttleId = setTimeout(() => {
      throttleId = null;
      callback();
    }, 500);
  };
};

export default throttle;
