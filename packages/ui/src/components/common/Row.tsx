'use client';
import { type HTMLAttributes, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ColumnProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLElement>;

export const Row = ({ children, className, style, ...props }: ColumnProps) => {
  return (
    <div
      {...props}
      style={style}
      className={twMerge('w-auto h-auto flex flex-wrap flex-row', className)}
    >
      {children}
    </div>
  );
};
