import { type User } from '@api/.';
import { type FestivalDate } from '@page/(back-nav)/lineup/page';

export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const COOKIE_KEYS = {
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
  verified: 'danfesta-verified-student',
} as const;

export const API_ROUTES = {
  user: {
    me: '/user',
    infoOf: (...scope: (keyof User)[]) =>
      `/user/scoped-info?scope=${scope.join(' ')}`,
    login: '/user/login',
    findMy: {
      password: {
        sendSMS: '/user/find/pwd',
        verifySMS: '/user/find/pwd/verify',
        reset: '/user/find/pwd/reset',
      },
      id: {
        sendSMS: '/user/find/id',
      },
    },
    signup: {
      register: (token: string) => `/user/${token}`,
      sendSMS: (token: string) => `/user/sms/${token}`,
      verifySMS: (token: string) => `/user/sms/verify/${token}`,
    },
    reissue: '/user/reissue',
    dku: {
      verify: '/user/dku/verify',
      reverify: '/user/dku/refresh',
    },
    valid: (nickname: string) => `/user/valid?nickname=${nickname}`,
  },
  ticket: {
    /**
     * @name POST /ticket
     * @description 티켓 신청하기
     * @param {number} eventId - 행사 ID
     * @param {string} captchaKey - 캡차 키
     * @param {string} captchaValue - 캡차 값
     */
    apply: '/ticket',
    /**
     * @name GET /ticket
     * @description 내 티켓 정보 조회 -- 관리자용, 호출시 SMS가 발송됨
     * @returns {TicketInfo} 티켓 정보
     *
     */
    info: (ticketId: number) => `/ticket/${ticketId}`,
    /**
     * @name POST /ticket/:titkcetId/permit
     * @description 티켓 발급
     * @param titkcetId - 티켓 ID
     */
    issue: (titkcetId: number) => `/ticket/${titkcetId}/permit`,
    /**
     * @name POST /ticket/:ticketId/sms
     * @description 티켓 인증 코드 재전송
     * @param ticketId - 티켓 ID
     * @returns { code: string }
     */
    resendSMS: (ticketId: number) => `/ticket/${ticketId}/sms`,
    /**
     * @name GET /ticket/reservation/:eventId
     * @description 내 티켓 정보 조회
     * @param eventId - 행사 ID
     */
    reservation: (eventId: number) => `/ticket/reservation/${eventId}`,
    /**
     * @name GET /ticket/event
     * @description 행사 목록 조회
     * @returns {FestivalEvent[]} 행사 목록
     */
    event: '/ticket/event',
    /**
     * @name GET /ticket/event/my
     * @description 내 티켓 목록 조회
     */
    myTicketList: '/ticket/event/my',
    /**
     * @name GET /ticket/:eventId
     * @description 내 티켓 조회
     * @param eventId - 행사 ID
     * @returns
     */
    myTicket: (eventId: number) => `/ticket/event/${eventId}`,
    captcha: {
      /**
       * @name GET /ticket/captcha/key
       * @description 캡차 키 발급
       * @returns {string} 캡차 키
       * @example
       * const key = await api.get(API_ROUTES.ticket.captcha.key);
       * console.log(key); // 'abc123'
       */
      key: '/ticket/captcha/key',
      /**
       * @name GET /ticket/captcha/image/:key
       * @description 캡차 이미지 조회
       * @param {string} key - 캡차 키
       * @returns {Buffer} 캡차 이미지
       * @example
       * const key = await api.get(API_ROUTES.ticket.captcha.key);
       * const image = await api.get(API_ROUTES.ticket.captcha.image(key));
       * console.log(image); // <Buffer 89 50 4e ...>
       */
      image: (key: string) => `/ticket/captcha/image/${key}`,
    },
  },
  lineup: {
    /**
     * @name GET /lineup
     * @description 라인업 조회
     * @returns {LineupInfo[]} 라인업 정보
     */
    list: (date: FestivalDate) => `/line-up?festivalDate=${date}`,
  },
  stamp: {
    /**
     * @name POST /stamp - 왜 POST인지 모르겠음. 백엔드에 물어보기
     * @description 내가 받은 스탬프 조회
     * @returns {StampInfo[]} 스탬프 정보
     */
    list: '/stamp/my',
  },
} as const;

export const protectedRoutes = ['/admin'];
export const privateRoutes = ['/mypage', '/ticketing'];
