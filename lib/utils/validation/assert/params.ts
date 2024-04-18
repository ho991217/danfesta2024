import { CustomError, ErrorCause } from '../error';

export default function assertParams(params: string | string[]) {
  if (Array.isArray(params)) {
    params.forEach((param) => {
      if (!param || param.length === 0) {
        throw new CustomError(ErrorCause.NO_PARAMS);
      }
    });
  } else if (params.length === 0) {
    throw new CustomError(ErrorCause.NO_PARAMS);
  }
}
