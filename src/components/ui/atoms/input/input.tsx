import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';


export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input className='input'
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
