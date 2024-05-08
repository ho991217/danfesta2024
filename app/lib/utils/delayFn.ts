export default function delayFn<T = void>(
  fn: () => T,
  delay = 100,
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
}
