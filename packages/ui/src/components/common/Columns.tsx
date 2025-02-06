import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

export type ColumnsProps = {
  children: ReactNode;
  className?: string;
  columns: number;
};

export const Columns = ({ children, className, columns }: ColumnsProps) => {
  return (
    <div
      style={{
        gridTemplateColumns: `${columns}`,
      }}
      className={cn('w-auto h-auto grid gap-4', className)}
    >
      {children}
    </div>
  );
};
