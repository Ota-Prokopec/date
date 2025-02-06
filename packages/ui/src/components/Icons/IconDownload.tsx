'use client';
import { MdAddToHomeScreen } from 'react-icons/md';
import { cn } from '../../lib/utils';

export type IconDownloadProps = {
  className?: string;
  onClick?: () => void;
};

export const IconDownload = ({ className, onClick }: IconDownloadProps) => {
  return <MdAddToHomeScreen onClick={onClick} className={cn('w-8 h-8  fill-black/85', className)}></MdAddToHomeScreen>;
};
