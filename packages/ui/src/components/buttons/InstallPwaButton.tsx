'use client';

import { usePwaInstaller } from '../../hooks/usePwaInstaller';
import { IconDownload } from '../Icons/IconDownload';
import { cn } from '../../lib/utils';

export type InstallPwaButtonProps = {
  className?: string;
};

export const InstallPwaButton = ({ className }: InstallPwaButtonProps) => {
  const { install, isInstalled } = usePwaInstaller();

  return (
    <>
      {!isInstalled && (
        <IconDownload
          className={cn('cursor-pointer bg-white rounded-full p-2 w-12 h-12', className)}
          onClick={install}
        ></IconDownload>
      )}
    </>
  );
};
