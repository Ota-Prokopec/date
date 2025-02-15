import { DialogClose } from '@radix-ui/react-dialog'
import { type ReactNode } from 'react'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Dialog as ShadcnDialog,
} from '../shadcn/dialog'
import { Column } from './Column'

type DialogProps = {
  children: ReactNode
  className?: string
  title: string
  defaultOpen?: boolean
  dialogTrigger: ReactNode
  dialogCloseButton?: ReactNode
}
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
  )
}
