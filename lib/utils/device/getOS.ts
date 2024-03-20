import { isAndroid } from './isAndroid';
import { isIOS } from './isIOS';
import { isServer } from './isServer';

export function getOS() {
  if (isServer()) return 'server';

  if (isAndroid()) return 'android';

  if (isIOS()) return 'ios';

  return 'desktop';
}
