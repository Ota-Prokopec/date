import { cn } from '../../lib/utils'
import type { HTMLInputTypeAttribute } from 'react'
import { Input as HeroUIINput } from '@heroui/react'

type InputProps = {
  className?: string
  defaultValue?: string
  placeholder?: string
  type: HTMLInputTypeAttribute
  maxLength?: number
  onValueChange?: (value: string) => void
} & Parameters<typeof HeroUIINput>[0]

export const Input = ({
  className,
  defaultValue,
  placeholder,
  type,
  maxLength,
  onValueChange,
  ...props
}: InputProps) => {
  return (
    <HeroUIINput
      onChange={(e) => {
        if (onValueChange) onValueChange(e.target.value)
      }}
      maxLength={maxLength}
      className={cn(
        'w-auto input input-bordered input-lg rounded-xl text-black/90 font-semibold bg-white dark:bg-black !outline-none !border-none',
        className
      )}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  )
}
