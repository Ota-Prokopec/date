'use client';
import { LuLoader } from 'react-icons/lu';
import { cn } from '../../lib/utils';

export type LoadingProps = {
  className?: string;
};

export const Loading = ({ className }: LoadingProps) => {
  return (
    <LuLoader
      className={cn('text-lightModeTextColor dark:text-darkModeTextColor w-5 h-5 animate-spin', className)}
    ></LuLoader>
  );
};
