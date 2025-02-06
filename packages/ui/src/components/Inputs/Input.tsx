import { cn } from '@/lib/utils';
import type { HTMLInputTypeAttribute } from 'react';
import { Input as ShadcnInput } from '../shadcn/input';

type InputProps = {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  maxLength?: number;
  onValueChange?: (value: string) => void;
} & Parameters<typeof ShadcnInput>[0];
export const Input = ({
  className,
  defaultValue,
  placeholder,
  type,
  maxLength,
  onValueChange,
  ...props
}: InputProps) => {
  return (
    <ShadcnInput
      onChange={(e) => {
        if (onValueChange) onValueChange(e.target.value);
      }}
      maxLength={maxLength}
      className={cn(
        'w-auto input input-bordered input-lg rounded-xl text-black/90 font-semibold bg-white dark:bg-black',
        className
      )}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};
