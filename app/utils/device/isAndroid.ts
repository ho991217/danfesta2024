import { isServer } from './isServer';

/**
 * @name isAndroid
 * @description
 * 유저가 안드로이드 기기에서 접속했는지 여부를 반환합니다.
 */
export function isAndroid() {
  if (isServer()) return false;

  return navigator.userAgent.match(/android/i) !== null;
}
