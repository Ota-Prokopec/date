'use client';
import { Icon } from '../Icon/Icon';

import { LuSettings2 } from 'react-icons/lu';
import { cn } from '../../lib/utils';

export type IconSettingsProps = {
  className?: string;
  onClick?: () => void;
};

export const IconSettings = ({ className, onClick }: IconSettingsProps) => {
  return (
    <Icon onClick={onClick} className={cn('w-8 h-8', className)}>
      <LuSettings2 className={'w-full h-full'}></LuSettings2>
    </Icon>
  );
};
