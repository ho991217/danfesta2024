import { isServer } from './isServer';

/**
 * @name isIOS
 * @description
 * 현재 실행 환경이 iOS인지 여부를 반환합니다.
 */
export function isIOS() {
  if (isServer()) return false;

  return navigator.userAgent.match(/iphone|ipad/i) !== null;
}
