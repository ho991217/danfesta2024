import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type?: HTMLInputTypeAttribute;
};

export default function Input(props: InputProps) {
  return <input {...props} />;
}
