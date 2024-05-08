export default function throttle<F extends (...args: any[]) => any>(
  callback: F,
  limit = 1000,
): (...args: Parameters<F>) => void {
  let throttled: boolean;
  return function (this: any): void {
    const args: any = arguments;
    const context = this;
    if (!throttled) {
      callback.apply(context, args);
      throttled = true;
      setTimeout(() => {
        throttled = false;
      }, limit);
    }
  };
}
