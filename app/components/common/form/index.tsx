'use client';

import clsx from 'clsx';
import { HTMLAttributes, HTMLInputTypeAttribute, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { variants } from './motion';
import Link from 'next/link';

type FormProps = HTMLAttributes<HTMLFormElement>;

type InputProps = {
  className?: string;
  type: HTMLInputTypeAttribute;
  pattern?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ButtonProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | 'link';
  to?: string;
  variant?: 'filled' | 'outlined' | 'transparent';
};

export default function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={clsx(
        'flex flex-col items-center justify-start w-full',
        className
      )}
      {...props}
    >
      {children}
    </form>
  );
}

function Input({ className, ...props }: InputProps) {
  return (
    <motion.input
      variants={variants.input}
      initial='initial'
      whileTap='active'
      className={clsx(
        'bg-neutral-200 w-full rounded-md h-12 px-4 dark:bg-neutral-700',
        className
      )}
      {...props}
    />
  );
}

Form.TextInput = function TextInput(props: Omit<InputProps, 'type'>) {
  return <Input type='text' {...props} />;
};

Form.ID = function IDInput(props: Omit<InputProps, 'type'>) {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 8) return;
    setValue(e.target.value);
  }

  return (
    <Input
      type='number'
      pattern='^[0-9]{8}$'
      inputMode='numeric'
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

Form.Password = function PasswordInput(props: Omit<InputProps, 'type'>) {
  return <Input type='password' {...props} />;
};

Form.Button = function Button({
  className,
  children,
  variant = 'filled',
  type = 'button',
  to = '',
}: ButtonProps) {
  const MotionLink = motion(Link);
  const motionProps = {
    variants: variants.button,
    initial: 'initial',
    whileTap: 'active',
    className: clsx(
      'w-full rounded-md h-10 px-4 flex items-center justify-center',
      variant === 'filled' && 'bg-primary text-neutral-50',
      variant === 'outlined' && 'border border-primary',
      variant === 'transparent' &&
        'text-neutral-500 bg-white dark:text-neutral-500 dark:bg-black',
      className
    ),
  };

  if (type === 'link') {
    if (!to) throw new Error('`to` prop is required when type is link');

    return (
      <MotionLink href={to} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} {...motionProps}>
      {children}
    </motion.button>
  );
};

Form.Group = function Group({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
