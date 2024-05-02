const throttle = (callback: (...args: any[]) => void, delay = 1000) => {
  let throttleId: NodeJS.Timeout | null = null;

  return () => {
    if (throttleId) return;
    console.log('throttle');

    throttleId = setTimeout(() => {
      throttleId = null;
      callback();
    }, delay);
  };
};

export default throttle;
