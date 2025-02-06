'use client';
import { Chip } from '@heroui/react';
import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type SongBadgeProps = {
  children: ReactNode;
  className?: string;
};

export const Badge = ({ children, className }: SongBadgeProps) => {
  return (
    <Chip
      className={cn(
        'bg-white/15 shadow-sm border border-white/20 h-auto w-auto p-2 items-center justify-center text-center',
        className
      )}
    >
      {children}
    </Chip>
  );
};
