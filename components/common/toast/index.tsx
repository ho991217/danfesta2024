import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { BsExclamationCircleFill, BsCheckCircleFill } from 'react-icons/bs';
import { variants } from './motion';
import If from '@/components/util/if';

export type ToastType = 'success' | 'error';

type ToastProps = {
  children: string;
  type: ToastType;
};

/**
 * @name Toast
 * @description
 * 화면 하단에 나타나는 알림을 띄우는 컴포넌트입니다.
 * @param children 알림에 나타낼 메시지 - 최대 길이 30자
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { children, type },
  ref
) {
  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={variants.transition}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='fixed flex justify-start min-w-40 gap-3 items-center whitespace-nowrap bottom-10 p-3 right-[50%] bg-[#2C2C2C] text-neutral-100 rounded-full shadow-xl'
    >
      <If condition={type === 'success'}>
        <If.Then>
          <BsCheckCircleFill size={25} color='#00A86B' />
        </If.Then>
        <If.Else>
          <BsExclamationCircleFill size={25} color='#E05634' />
        </If.Else>
      </If>
      <p className='text-sm mr-3'>{children}</p>
    </motion.div>
  );
});

export default motion(Toast);
