import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Drawer as DrawerHeroUi,
  DrawerProps as DrawerHeroUiProps,
} from '@heroui/react'
import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export type DrawerControl = {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

type DrawerProps = {
  title?: ReactNode
  children: ReactNode
  className?: string
  control: DrawerControl
  footer?: ReactNode
} & DrawerHeroUiProps

export const Drawer = ({ title, children, className, control, footer, ...props }: DrawerProps) => {
  return (
    <DrawerHeroUi
      className={cn('', className)}
      {...props}
      isOpen={control.isOpen}
      onOpenChange={control.setOpen}
    >
      <DrawerContent>
        {(onClose) => (
          <>
            {title && <DrawerHeader className="flex flex-col gap-1">{title}</DrawerHeader>}
            <DrawerBody>{children}</DrawerBody>
            {footer && <DrawerFooter>{footer}</DrawerFooter>}
          </>
        )}
      </DrawerContent>
    </DrawerHeroUi>
  )
}

export const useDrawer = (initialOpen: boolean = false) => {
  const [isOpen, setOpen] = useState<boolean>(initialOpen)

  return { setOpen, isOpen }
}
