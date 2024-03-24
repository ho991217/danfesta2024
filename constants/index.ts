export const API_URL = 'https://next.danvery.com/api';

export const COOKIE_KEYS = {
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
} as const;

export const API_ROUTES = {
  user: {
    me: '/user',
    login: '/user/login',
    signup: (token: string) => `/user/${token}`,
    dku: {
      verify: '/user/dku/verify',
    },
    sms: {
      send: (token: string) => `/user/sms/${token}`,
      verify: (token: string) => `/user/sms/verify/${token}`,
    },
    valid: (nickname: string) => `/user/valid?nickname=${nickname}`,
  },
  ticket: {
    reservation: '/ticket/reservation',
  },
} as const;
