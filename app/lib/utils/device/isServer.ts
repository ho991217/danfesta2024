declare const global: unknown;

/**
 * @name isServer
 * @description
 * 이 코드가 서버에서 실행되는지 여부를 반환합니다.
 */
export function isServer() {
  return typeof window === 'undefined' && typeof global !== 'undefined';
}
