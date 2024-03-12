'use client';

import clsx from 'clsx';
import { HTMLAttributes, HTMLInputTypeAttribute, useState } from 'react';
import { MotionProps, motion } from 'framer-motion';
import { variants } from './motion';
import Link from 'next/link';
import {
  ChangeHandler,
  FieldValues,
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';

type FormProps<TFieldValues extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<TFieldValues>;
};

type InputProps = {
  className?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  pattern?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  value?: string;
  onChange?: ChangeHandler;
  options?: RegisterOptions;
};

type InputSubComponents = Omit<InputProps, 'type' | 'name'> & {
  name?: string;
};

type ButtonProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | 'link';
  to?: string;
  variant?: 'filled' | 'outlined' | 'transparent';
};

export default function Form<T extends FieldValues>({
  children,
  className,
  onSubmit,
  ...props
}: FormProps<T>) {
  const method = useForm<T>();

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        className={clsx(
          'flex flex-col items-center justify-start w-full',
          className
        )}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

function Input({ className, name, options, ...props }: InputProps) {
  const { register } = useFormContext();

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
      {...register(name, options)}
    />
  );
}

Form.Text = function TextInput({
  name = 'text',
  ...props
}: InputSubComponents) {
  return <Input type='text' name={name} {...props} />;
};

Form.ID = function IDInput({ name = 'id', ...props }: InputSubComponents) {
  return (
    <Input
      name={name}
      type='number'
      pattern='^[0-9]{8}$'
      inputMode='numeric'
      options={{
        minLength: 8,
        maxLength: 8,
        pattern: /^[0-9]{8}$/,
        onChange(event) {
          const { value } = event.target;
          if (isNaN(Number(value)) || value === 'e') return;
          const { length } = value;

          if (length > 8) {
            event.target.value = value.slice(0, 8);
          }
        },
      }}
      {...props}
    />
  );
};

Form.Password = function PasswordInput({
  name = 'password',
  ...props
}: InputSubComponents) {
  return <Input type='password' name={name} {...props} />;
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
        'flex flex-col items-center justify-start w-full gap-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
