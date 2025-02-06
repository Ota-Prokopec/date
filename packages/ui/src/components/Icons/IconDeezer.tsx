'use client';
import { FaDeezer } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export type IconDeezerProps = {
  className?: string;
  onClick?: () => void;
};

export const IconDeezer = ({ className, onClick }: IconDeezerProps) => {
  return <FaDeezer onClick={onClick} className={cn('w-8 h-8  fill-black/85', className)}></FaDeezer>;
};
