'use client';

import clsx from 'clsx';
import {
  Children,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  isValidElement,
} from 'react';

type FormProps = HTMLAttributes<HTMLFormElement>;

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type?: HTMLInputTypeAttribute;
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  type?: 'submit' | 'reset' | 'button';
};

export default function Form({ children, className, ...props }: FormProps) {
  return (
    <form
      className={clsx(
        'flex flex-col items-center justify-start w-full',
        className
      )}
    >
      {children}
    </form>
  );
}

Form.Input = function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx('bg-neutral-200 w-full rounded-md h-10 px-4 dark:bg-neutral-700', className)}
      {...props}
    />
  );
};

Form.Button = function Button({className, ...props}: ButtonProps) {
  return <button className={clsx("bg-primary w-full rounded-md h-10 px-4", className)} {...props} />;
};
