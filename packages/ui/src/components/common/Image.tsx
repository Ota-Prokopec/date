import { ImageProps } from '@heroui/react'
import { cn } from '../../lib/utils'

export type ReactImageProps = {
  src: string | undefined | null
  fallbackSrc?: string
  className?: string
} & Omit<ImageProps, 'onError'> & {}

const ReactImage = ({ src: initialSrc, fallbackSrc, className, ...props }: ReactImageProps) => {
  return (
    <img
      className={cn('object-cover', className)}
      src={(initialSrc || fallbackSrc) ?? ''}
      {...props}
    ></img>
  )
}

export { ReactImage as Image }
