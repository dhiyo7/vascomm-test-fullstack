'use client';
import { IconType } from 'react-icons'
import {cn} from "@/utils/general";


const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  capitalize,
  icon: Icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition w-full px-4',
        outline
          ? 'bg-white border-blue-500 text-blue-500'
          : 'bg-blue-500 border-blue-500 text-white',
        small
          ? 'py-1 text-sm font-light border-[1px]'
          : 'py-2 text-base font-semibold border-2',
        capitalize && 'uppercase',
        className
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
