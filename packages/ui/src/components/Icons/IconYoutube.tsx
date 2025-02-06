'use client';
import { FaYoutube } from 'react-icons/fa';
import { cn } from '../../lib/utils';

export type IconYoutubeProps = {
  className?: string;
  onClick?: () => void;
};

export const IconYoutube = ({ className, onClick }: IconYoutubeProps) => {
  return <FaYoutube onClick={onClick} className={cn('w-8 h-8  fill-black/85', className)}></FaYoutube>;
};
