import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ScrollProps = {
  className?: string;
  children: ReactNode;
};

export const Scroll = ({ className, children }: ScrollProps) => {
  return <div className={cn('h-auto w-auto overflow-scroll', className)}>{children}</div>;
};
