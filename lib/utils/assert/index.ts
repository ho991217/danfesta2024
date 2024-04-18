import { default as jwt } from './jwt';
import { default as params } from './params';
import { default as uuid } from './uuid';

const assertType = {
  jwt,
  params,
  uuid,
} as const;

type AssertKeys = keyof typeof assertType;

type AssertTypeValue<T extends AssertKeys> = Parameters<
  (typeof assertType)[T]
>[0];

/**
 * @description 유효성 검사 함수
 * @param type 검사 타입
 * @param value 검사 값
 * @example
 * assert('jwt', token); // 유효한 jwt인지 검사
 */
export default function assert<T extends AssertKeys>(
  type: T,
  value: AssertTypeValue<T>,
) {
  assertType[type](value as any);
}
