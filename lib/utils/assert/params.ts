import { ErrorCause } from '../error';

export default function assertParams(params: string | string[]) {
  if (Array.isArray(params)) {
    params.forEach((param) => {
      if (!param || param.length === 0) {
        throw new Error(`필수 파라미터가 없습니다.`, {
          cause: ErrorCause['no-params'],
        });
      }
    });
  } else if (params.length === 0) {
    throw new Error('필수 파라미터가 없습니다.', {
      cause: ErrorCause['no-params'],
    });
  }
}
