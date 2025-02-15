'use client'
import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { Card } from '../shadcn/card'

export type LinkButtonProps = {
  children: ReactNode
  href: string
  onClick?: () => void
}
export const LinkButton = ({ children, href, onClick }: LinkButtonProps) => {
  return (
    <a onClick={onClick} className={cn('w-auto h-auto')} href={href}>
      <Card className={cn('!text-white/85 bg-black/90 w-auto h-auto p-2 pr-3 pl-3 rounded-lg')}>
        {children}
      </Card>
    </a>
  )
}
