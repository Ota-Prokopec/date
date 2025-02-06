import { Badge } from 'flowbite-react';
import { Row } from './Row';
import { cn } from '../../lib/utils';
import React, { CSSProperties, ReactNode } from 'react';

type IndicatorProps = {
  color?: CSSProperties['backgroundColor'];
  className?: string;
  children: ReactNode;
};
export const Indicator = ({ color = 'green', className, children }: IndicatorProps) => {
  return (
    <Badge color="red" className={cn('w-fit', className)}>
      <Row className="gap-1 items-center w-auto">
        <div style={{ backgroundColor: color }} className="w-2 h-2 rounded-full"></div>
        {children}
      </Row>
    </Badge>
  );
};
