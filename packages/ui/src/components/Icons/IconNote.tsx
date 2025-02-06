'use client';
import { Icon } from '../Icon/Icon';
import { CiMusicNote1 } from 'react-icons/ci';
import { cn } from '../../lib/utils';

export type IconNoteProps = {
  className?: string;
};

export const IconNote = ({ className }: IconNoteProps) => {
  return (
    <Icon className={cn('w-8 h-8', className)}>
      <CiMusicNote1 className={'w-full h-full'}></CiMusicNote1>
    </Icon>
  );
};
