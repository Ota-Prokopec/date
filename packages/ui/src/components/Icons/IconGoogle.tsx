'use client';
import { FcGoogle } from 'react-icons/fc';
import { cn } from '../../lib/utils';

export type IconGoogleProps = {
  className?: string;
  onClick?: () => void;
};

export const IconGoogle = ({ className, onClick }: IconGoogleProps) => {
  return <FcGoogle onClick={onClick} className={cn('w-8 h-8  fill-black/85', className)}></FcGoogle>;
};
