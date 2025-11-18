import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  showArrow = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded font-semibold transition-all duration-300 flex items-center gap-2';

  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border-2 border-black hover:bg-gray-50',
    outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
}
