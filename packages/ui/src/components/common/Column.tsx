'use client';
import { twMerge } from 'tailwind-merge';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Column = ({ children, className, style }: ColumnProps) => {
  return (
    <div style={style} className={twMerge('w-auto h-auto flex flex-wrap flex-col', className)}>
      {children}
    </div>
  );
};
