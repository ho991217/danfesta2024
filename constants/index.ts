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
  },
  ticket: {
    reservation: '/ticket/reservation',
  },
} as const;
