export type ValueOf<T> = T[keyof T];

export type DeepValueOf<T> = T extends object
  ? ValueOf<{ [K in keyof T]: DeepValueOf<T[K]> }>
  : T;
