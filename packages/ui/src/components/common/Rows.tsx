import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

export type RowsProps = {
  children: ReactNode;
  className?: string;
  rows: number;
};

export const Rows = ({ children, className, rows }: RowsProps) => {
  return (
    <div
      style={{
        gridTemplateRows: rows,
      }}
      className={cn('w-auto h-auto grid gap-4', className)}
    >
      {children}
    </div>
  );
};
