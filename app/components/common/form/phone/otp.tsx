import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@components/ui/input-otp';
import { useFormContext } from 'react-hook-form';

type OTPProps = {
  onSubmit?: (v: string) => void;
};

export default function OTP({ onSubmit }: OTPProps) {
  const { register } = useFormContext();
  const { ref, name } = register('code');

  const onChange = (v: string) => {
    if (v.length === 6) {
      onSubmit?.(v);
    }
  };

  return (
    <InputOTP
      ref={ref}
      name={name}
      onChange={onChange}
      maxLength={6}
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
}
