'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ZodType } from 'zod';

export type FormProps<TFieldValues extends FieldValues> = Omit<
  HTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<TFieldValues>;
  schema: ZodType<TFieldValues>;
  validateOn?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
};

export default function Form<T extends FieldValues>({
  children,
  className,
  onSubmit,
  schema,
  validateOn = 'onSubmit',
  ...props
}: FormProps<T>) {
  const method = useForm<T>({
    resolver: zodResolver(schema),
    mode: validateOn,
    delayError: 500,
  });

  return (
    <FormProvider {...method}>
      <form
        onSubmit={method.handleSubmit(onSubmit)}
        className={cn(
          'flex flex-col items-center justify-start w-full gap-6',
          className,
        )}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

Form.Group = function Group({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start w-full gap-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
