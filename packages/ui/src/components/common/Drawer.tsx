import type { ReactNode } from 'react';
import {
  Drawer,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
} from '../shadcn/drawer';
import { cn } from '@/lib/utils';

type DrawerProps = {
  triggerButton: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  closeButton?: ReactNode;
  className?: string;
};

const MyDrawer = ({
  triggerButton,
  title,
  description,
  children,
  closeButton,
  className,
}: DrawerProps) => {
  return (
    <Drawer {...{ shouldScaleBackground: false, autoFocus: false }}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className={cn('!z-[400]', className)}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export { MyDrawer as Drawer };
