import { cn } from '../../lib/utils'
import { Button as NextUIButton } from '@heroui/react'
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button = ({ children, className, onClick, disabled, type }: ButtonProps) => {
  return (
    <NextUIButton
      type={type}
      disableAnimation
      disabled={disabled}
      isDisabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-lg bg-black text-white cursor-pointer',
        { 'cursor-not-allowed': disabled },
        className
      )}
    >
      {children}
    </NextUIButton>
  )
}
