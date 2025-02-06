'use client';
import { TailSpin } from 'react-loader-spinner';
import { cn } from '../../lib/utils';

export type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={cn('', className)}
    />
  );
};
