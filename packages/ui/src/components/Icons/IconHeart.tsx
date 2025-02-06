'use client';
import { FaHeart } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export type IconHeartProps = {
  className?: string;
  onClick?: () => void;
};

export const IconHeart = ({ className, onClick }: IconHeartProps) => {
  return <FaHeart onClick={onClick} className={cn('w-8 h-8  fill-green-500', className)}></FaHeart>;
};
