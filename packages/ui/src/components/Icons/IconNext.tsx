'use client';
import { Icon } from '../Icon/Icon';

import { MdNavigateNext } from 'react-icons/md';
import { cn } from '../../lib/utils';

export type IconNextProps = {
  className?: string;
  onClick?: () => void;
};

export const IconNext = ({ className, onClick }: IconNextProps) => {
  return (
    <Icon onClick={onClick} className={cn('w-8 h-8', className)}>
      <MdNavigateNext className={'w-full h-full fill-green'}></MdNavigateNext>
    </Icon>
  );
};
