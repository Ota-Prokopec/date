'use client'
import { TailSpin } from 'react-loader-spinner'
import { cn } from '../../lib/utils'

export type LoaderProps = {
  className?: string
}

const options: Parameters<typeof TailSpin>[0] = {
  color: 'blue',
  visible: true,
  height: 40,
  width: 40,
  strokeWidth: 4,
  ariaLabel: 'tail-spin-loading',
  radius: 1,
}

export const Loader = ({ className }: LoaderProps) => {
  return <TailSpin {...options} wrapperStyle={{}} wrapperClass={cn('', className)} />
}
