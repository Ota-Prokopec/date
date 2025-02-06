'use client';
import { Icon } from '../Icon/Icon';

import { FaArrowRotateRight } from 'react-icons/fa6';
import { cn } from '../../lib/utils';

export type IconReloadProps = {
  className?: string;
  onClick?: () => void;
};

export const IconReload = ({ className, onClick }: IconReloadProps) => {
  return (
    <Icon onClick={onClick} className={cn('w-8 h-8', className)}>
      <FaArrowRotateRight className={'w-full h-full'}></FaArrowRotateRight>
    </Icon>
  );
};
