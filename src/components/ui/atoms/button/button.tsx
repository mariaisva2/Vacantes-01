import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'vacantes' | 'companias' | 'active' | 'editar' | 'eliminar' | 'agregar'| 'inactive'; 
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'vacantes', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`button ${variant}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;