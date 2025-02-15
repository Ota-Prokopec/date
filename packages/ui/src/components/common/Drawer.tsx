import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../shadcn/drawer'

type DrawerProps = {
  triggerButton: ReactNode
  title: string
  description?: string
  children: ReactNode
  className?: string
}

const MyDrawer = ({ triggerButton, title, description, children, className }: DrawerProps) => {
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
  )
}

export { MyDrawer as Drawer }
