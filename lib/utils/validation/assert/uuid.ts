import { CustomError, ErrorCause } from '../error';
import { isUUID } from '../validators';

export default function assertUUID(value: string) {
  if (!isUUID(value)) {
    throw new CustomError(
      ErrorCause.INVALID_FORMAT,
      '올바르지 않은 UUID입니다.',
    );
  }
}
