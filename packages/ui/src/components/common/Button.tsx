import { cn } from '../../lib/utils'
import { Button as NextUIButton } from '@heroui/react'
import { ReactNode } from 'react'
import { match } from 'ts-pattern'
import { Loading } from './Loading'

export type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  icon?: ReactNode
  isLoading?: boolean
} & Parameters<typeof NextUIButton>[0]

export const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
  isLoading = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <NextUIButton
      type={type}
      disableAnimation
      disabled={disabled}
      isDisabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-lg bg-black text-white cursor-pointer text-2xl !p-4 !pl-6 !pr-6 flex flex-row gap-3 items-center justify-center',
        { 'cursor-not-allowed': disabled },
        className
      )}
      {...props}
    >
      {match({ isLoading })
        .with({ isLoading: true }, () => <Loading></Loading>)
        .otherwise(() => (
          <>
            <span>{children}</span>
            {icon}
          </>
        ))}
    </NextUIButton>
  )
}
