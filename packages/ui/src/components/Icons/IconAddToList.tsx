'use client';
import { MdPlaylistAdd } from 'react-icons/md';
import { cn } from '../../lib/utils';

export type IconAddToListProps = {
  className?: string;
  onClick?: () => void;
};

export const IconAddToList = ({ className, onClick }: IconAddToListProps) => {
  return (
    <MdPlaylistAdd onClick={onClick} className={cn('w-8 h-8  fill-black/85 cursor-pointer', className)}></MdPlaylistAdd>
  );
};
