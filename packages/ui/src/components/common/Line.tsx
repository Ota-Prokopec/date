'use client';
import { cn } from '../../lib/utils';

export type LineProps = {
  className?: string;
};

export const Line = ({ className }: LineProps) => {
  return <div className={cn('w-full h-4 bg-black rounded-full', className)}></div>;
};
