import { isServer } from './isServer';

/**
 * @name isKakaoTalkBrowser
 * @description
 * 유저가 카카오톡 인앱 브라우저에서 접속했는지 여부를 반환합니다.
 */
export function isKakaoTalkBrowser() {
  if (isServer()) return false;

  return navigator.userAgent.match(/KAKAOTALK/i) !== null;
}
