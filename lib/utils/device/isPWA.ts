const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone;

export const isPWA = isInStandaloneMode();
