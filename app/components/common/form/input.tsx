'use client';

import { cn } from '@lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLAttributes, type HTMLInputTypeAttribute, forwardRef } from 'react';
import {
  ChangeHandler,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { variants } from './motion';

type InputProps = {
  className?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  pattern?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  placeholder?: string;
  value?: string;
  onChange?: ChangeHandler;
  options?: RegisterOptions;
  required?: boolean;
  disabled?: boolean;
  customError?: string;
};

type InputSubComponents = Omit<InputProps, 'type' | 'name'> & {
  name?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  {
    className,
    name = 'text',
    options,
    label,
    disabled,
    customError,
    type = 'text',
    ...props
  },
  reference,
) {
  const { register, formState } = useFormContext();
  const { ref, ...rest } = register(name, options);
  const { errors } = formState;

  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="text-xs dark:text-neutral-500 text-neutral-700"
        >
          {label}
        </label>
      )}
      <motion.input
        ref={(e) => {
          ref(e);
          if (reference) {
            if (typeof reference === 'function') {
              reference(e);
            } else {
              reference.current = e;
            }
          }
        }}
        type={type}
        variants={variants.input}
        initial="initial"
        whileTap="active"
        className={cn(
          'bg-neutral-200 w-full rounded-md h-12 px-4 dark:bg-neutral-800 dark:placeholder-neutral-500 placeholder-neutral-400',
          disabled && 'text-neutral-300 dark:text-neutral-600',
          className,
        )}
        disabled={disabled}
        {...props}
        {...rest}
      />
      <AnimatePresence initial>
        {(errors[name]?.message || customError) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-500 dark:text-red-400"
          >
            {errors[name]?.message?.toString() || customError}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.displayName = 'Input';

export function ID({
  name = 'studentId',
  className,
  onChange,
  ...props
}: InputSubComponents) {
  return (
    <Input
      name={name}
      type="number"
      pattern="^[0-9]{8}$"
      inputMode="numeric"
      options={{
        onChange(event) {
          const { value } = event.target;
          const { length } = value;

          if (length > 8) {
            event.target.value = value.slice(0, 8);
          }
          onChange?.(event);
        },
      }}
      {...props}
    />
  );
}

export const Password = forwardRef<HTMLInputElement, InputSubComponents>(
  function ({ name = 'password', ...props }, ref) {
    return <Input ref={ref} type="password" name={name} {...props} />;
  },
);

Password.displayName = 'Password';

export default Input;
