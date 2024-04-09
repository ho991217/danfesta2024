'use client';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@components/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@lib/utils';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLAttributes, HTMLInputTypeAttribute, forwardRef } from 'react';
import {
    ChangeHandler,
    FieldValues,
    FormProvider,
    RegisterOptions,
    SubmitHandler,
    useForm,
    useFormContext,
} from 'react-hook-form';
import { ZodType } from 'zod';

import Button, { ButtonProps } from '../button';
import { variants } from './motion';

export type FormProps<TFieldValues extends FieldValues> = Omit<
    HTMLAttributes<HTMLFormElement>,
    'onSubmit'
> & {
    onSubmit: SubmitHandler<TFieldValues>;
    schema: ZodType<TFieldValues>;
    validateOn?: 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all';
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
    disabled?: boolean;
    customError?: string;
};

type InputSubComponents = Omit<InputProps, 'type' | 'name'> & {
    name?: string;
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

const Input = forwardRef<HTMLInputElement, InputProps>(function (
    { className, name, options, label, disabled, customError, ...props },
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
Form.Input = Input;

Form.Text = function TextInput({
    name = 'text',
    ...props
}: InputSubComponents) {
    return <Input type="text" name={name} {...props} />;
};

Form.ID = function IDInput({
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
};

const Password = forwardRef<HTMLInputElement, InputSubComponents>(function (
    { name = 'password', ...props },
    ref,
) {
    return <Input ref={ref} type="password" name={name} {...props} />;
});

Password.displayName = 'Password';
Form.Password = Password;

Form.Button = function ButtonComponent({
    className,
    children,
    disabled = false,
    variant = 'bottom',
    isLoading,
}: ButtonProps) {
    const { register, formState } = useFormContext();
    const { isSubmitting, isValid, isDirty } = formState;

    return (
        <Button
            type="submit"
            isLoading={isLoading}
            variant={variant}
            disabled={!isValid || !isDirty || isSubmitting || disabled}
            className={className}
            {...register('submit')}
        >
            {children}
        </Button>
    );
};

const SMSCode = forwardRef<
    HTMLInputElement,
    Omit<InputSubComponents, 'onChange'> & { onChange: (v: string) => void }
>(function ({ name = 'code', className, onChange }, ref) {
    return (
        <InputOTP
            ref={ref}
            name={name}
            className={className}
            maxLength={6}
            onChange={onChange}
            render={({ slots }) => (
                <>
                    <InputOTPGroup>
                        {slots.slice(0, 3).map((slot, index) => (
                            <InputOTPSlot key={index} {...slot} />
                        ))}
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-2xl" />
                    <InputOTPGroup>
                        {slots.slice(3).map((slot, index) => (
                            <InputOTPSlot key={index + 3} {...slot} />
                        ))}
                    </InputOTPGroup>
                </>
            )}
        />
    );
});

SMSCode.displayName = 'SMSCode';
Form.SMSCode = SMSCode;

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
