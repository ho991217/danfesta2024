import { isAndroid } from './isAndroid';
import { isIOS } from './isIOS';
import { isServer } from './isServer';

/**
 * @name isMobileWeb
 * @description
 * 유저가 모바일 웹에서 접속했는지 여부를 반환합니다.
 */
export function isMobileWeb() {
  if (isServer()) return false;

  if (isIOS() || isAndroid()) {
    return true;
  }

  return false;
}
