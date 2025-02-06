import { cn } from '../../lib/utils';
import { Image, ImageProps } from '@heroui/react';
import { useState } from 'react';

export type ReactImageProps = {
  src: string | undefined | null;
  fallbackSrc?: string;
  className?: string;
} & Omit<ImageProps, 'onError'> & {};

const ReactImage = ({ src: initialSrc, fallbackSrc, className, ...props }: ReactImageProps) => {
  return (
    <img
      className={cn('object-cover w-full h-full', className)}
      src={(initialSrc || fallbackSrc) ?? ''}
      {...props}
    ></img>
  );
};

export { ReactImage as Image };
