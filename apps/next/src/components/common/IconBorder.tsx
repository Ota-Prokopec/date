import { cn } from '@repo/ui/dist/lib/utils'
import type { ReactNode } from 'react'

type IconBorderProps = { className?: string; children: ReactNode }

export const IconBorder = ({ className, children }: IconBorderProps) => (
  <div className={cn('rounded-full bg-white p-4 flex items-center justify-center', className)}>
    {children}
  </div>
)
