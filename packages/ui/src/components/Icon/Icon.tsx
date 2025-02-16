'use client'
import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export type IconProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export const Icon = ({ children, className, onClick, disabled }: IconProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn('rounded-full dark:text-white dark:fill-white', className)}
    >
      {children}
    </button>
  )
}
