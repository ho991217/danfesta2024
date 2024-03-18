export const API_URL = 'https://next.danvery.com/api';

export const COOKIE_KEYS = {
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
} as const;

export const API_ROUTES = {
  user: {
    me: '/user',
    login: '/user/login',
    signup: '/user/signup',
    dku: {
      verify: '/user/dku/verify',
    },
  },
  ticket: {
    reservation: '/ticket/reservation',
  },
} as const;
