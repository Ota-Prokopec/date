import { useEffect, useState, type ReactNode } from 'react';
import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../shadcn/dialog';
import { Column } from './Column';
import { DialogClose } from '@radix-ui/react-dialog';

type DialogProps = {
  children: ReactNode;
  className?: string;
  title: string;
  defaultOpen?: boolean;
  dialogTrigger: ReactNode;
  dialogCloseButton?: ReactNode;
};
export const Dialog = ({
  children,
  className,
  title,
  defaultOpen = false,
  dialogCloseButton,
  dialogTrigger,
}: DialogProps) => {
  return (
    <ShadcnDialog defaultOpen={defaultOpen}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Column>{children}</Column>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>{dialogCloseButton}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
};
