import { cn } from '../../lib/utils';
import { ReactNode } from 'react';
import { CardContent, CardHeader, Card as ShadcnCard } from '../shadcn/card';

type CardProps = {
  children?: ReactNode;
  className?: string;
  header?: ReactNode;
};
export const Card = ({ children, className, header }: CardProps) => {
  return (
    <ShadcnCard className={cn('rounded-lg w-auto h-auto gap-2 flex flex-col', className)}>
      {header && <CardHeader className="font-bold text-xl !p-0 !pl-3">{header}</CardHeader>}
      <CardContent className="w-full h-full flex justify-center items-center !p-0">{children}</CardContent>
    </ShadcnCard>
  );
};
