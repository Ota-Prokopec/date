'use client';
import { FaTimes } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export type IconTimesProps = {
  className?: string;
  onClick?: () => void;
};

export const IconTimes = ({ className, onClick }: IconTimesProps) => {
  return <FaTimes onClick={onClick} className={cn('w-8 h-8 fill-red-500 cursor-pointer', className)}></FaTimes>;
};
