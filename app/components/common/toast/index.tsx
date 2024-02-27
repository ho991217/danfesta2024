import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';

type ToastProps = Readonly<{
  children: string;
}>;

const transition = {
  type: 'spring',
  duration: 0.1,
  stiffness: 200,
  damping: 20,
};

const variants = {
  hidden: { opacity: 0, y: 100, x: '50%' },
  visible: { opacity: 1, y: 0, x: '50%' },
};

/**
 * @name Toast
 * @description
 * 화면 하단에 나타나는 알림을 띄우는 컴포넌트입니다.
 * @param children 알림에 나타낼 메시지 - 최대 길이 30자
 */
const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { children },
  ref
) {
  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={transition}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='fixed flex justify-start min-w-40 gap-3 items-center whitespace-nowrap bottom-10 p-3 right-[50%] bg-[#2C2C2C] text-neutral-100 rounded-full shadow-xl'
    >
      <AiFillExclamationCircle size={25} color='#E05634' />
      <p className='text-sm mr-3'>{children}</p>
    </motion.div>
  );
});

export default motion(Toast);
