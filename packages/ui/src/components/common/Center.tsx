import { ReactNode, CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

type CenterProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const Center = ({ children, className, style }: CenterProps) => {
  return (
    <div style={style} className={twMerge('flex justify-center items-center w-full h-auto', className)}>
      {children}
    </div>
  );
};
