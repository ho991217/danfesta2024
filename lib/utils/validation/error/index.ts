export enum ErrorCause {
  INVALID,
  NOT_AUTHORIZED,
  EXPIRED_TOKEN,
  NOT_LOGGED_IN,
  NOT_FOUND,
  NO_PARAMS,
  INVALID_FORMAT,
}

export class CustomError extends Error {
  constructor(type: ErrorCause, customMessage?: string) {
    let message;

    switch (type) {
      case ErrorCause.INVALID:
        message = '올바르지 않은 요청입니다.';
      case ErrorCause.NOT_AUTHORIZED:
        message = '권한이 없습니다.';
      case ErrorCause.EXPIRED_TOKEN:
        message = '만료된 토큰입니다.';
      case ErrorCause.NOT_LOGGED_IN:
        message = '로그인되어 있지 않습니다.';
      case ErrorCause.NOT_FOUND:
        message = '찾을 수 없는 데이터입니다.';
      case ErrorCause.NO_PARAMS:
        message = '필수 파라미터가 없습니다.';
      case ErrorCause.INVALID_FORMAT:
        message = '올바르지 않은 형식입니다.';
      default:
        message = '알 수 없는 오류가 발생했습니다.';
    }

    super(customMessage ?? message, {
      cause: type,
    });
  }
}

export * from './api-error';
