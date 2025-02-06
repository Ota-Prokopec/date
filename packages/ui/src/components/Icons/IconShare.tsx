'use client';
import { RiShareForwardFill } from 'react-icons/ri';
import { cn } from '../../lib/utils';

export type IconShareProps = {
  className?: string;
  onClick?: () => void;
};

export const IconShare = ({ className, onClick }: IconShareProps) => {
  return (
    <RiShareForwardFill
      onClick={onClick}
      className={cn('w-8 h-8  fill-blue-500 cursor-pointer', className)}
    ></RiShareForwardFill>
  );
};
