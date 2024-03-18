'use client';

import clsx from 'clsx';
import {
  ForwardedRef,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react';
import { MotionProps, motion } from 'framer-motion';
import { variants } from './motion';
import {
  ChangeHandler,
  FieldValues,
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useForm,
  useFormContext,
} from 'react-hook-form';
import Button from '../button';

export type FormProps<TFieldValues extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<TFieldValues>;
};

type InputProps = {
  className?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  label?: string;
  pattern?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  placeholder?: string;
  value?: string;
  onChange?: ChangeHandler;
  options?: RegisterOptions;
  required?: boolean;
};

type InputSubComponents = Omit<InputProps, 'type' | 'name'> & {
  name?: string;
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
          'flex flex-col items-center justify-start w-full gap-6',
          className
        )}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { className, name, options, label, ...props },
  reference
) {
  const { register } = useFormContext();
  const { ref, ...rest } = register(name, options);

  return (
    <div className='flex w-full flex-col gap-2'>
      {label && (
        <label
          htmlFor={name}
          className='text-xs dark:text-neutral-500 text-neutral-700'
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
        variants={variants.input}
        initial='initial'
        whileTap='active'
        className={clsx(
          'bg-neutral-200 w-full rounded-md h-12 px-4 dark:bg-neutral-800 dark:placeholder-neutral-500 placeholder-neutral-400',
          className
        )}
        {...props}
        {...rest}
      />
    </div>
  );
});

Input.displayName = 'Input';
Form.Input = Input;

Form.Text = function TextInput({
  name = 'text',
  ...props
}: InputSubComponents) {
  return <Input type='text' name={name} {...props} />;
};

Form.ID = function IDInput({
  name = 'studentId',
  className,
  onChange,
  ...props
}: InputSubComponents) {
  return (
    <Input
      required
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
          onChange?.(event);
        },
      }}
      {...props}
    />
  );
};

const Password = forwardRef<HTMLInputElement, InputSubComponents>(function (
  { name = 'password', ...props },
  ref
) {
  return <Input ref={ref} type='password' name={name} required {...props} />;
});

Password.displayName = 'Password';
Form.Password = Password;

Form.Button = Button;

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
