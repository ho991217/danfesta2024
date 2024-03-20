import { isServer } from './isServer';

/**
 * @name isNaverBrowser
 * @description
 * 유저가 네이버 인앱 브라우저에서 접속했는지 여부를 반환합니다.
 */
export function isNaverBrowser() {
  if (isServer()) return false;

  return navigator.userAgent.match(/NAVER/i) !== null;
}
