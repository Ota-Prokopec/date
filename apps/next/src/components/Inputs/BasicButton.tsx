import { Button, ButtonProps } from '@repo/ui/components/common/Button'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { ReactNode } from 'react'

type BasicButtonProps = {
  children: ReactNode
  className?: string
  type: ButtonProps['type']
  icon?: ReactNode
}

export const BasicButton = ({ children, className, type, icon }: BasicButtonProps) => {
  return (
    <Button
      type={type}
      className={cn(
        'bg-blue-500 text-2xl !p-8 !pl-10 !pr-10 flex flex-row gap-3 items-center justify-center',
        className
      )}
    >
      <span>{children}</span>
      {icon}
    </Button>
  )
}
