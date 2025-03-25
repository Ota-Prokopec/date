import { Center } from '@repo/ui/components/common/Center'
import { Loading } from '@repo/ui/components/common/Loading'
import { cn } from '@repo/ui/dist/lib/utils'
import type { ReactNode } from 'react'

type LoadingPageProps = {
  children: ReactNode
  isLoading?: boolean
  className?: string
}

export const LoadingPage = ({ children, isLoading, className }: LoadingPageProps) => {
  return (
    <>
      {isLoading && (
        <Center className={cn('fixed left-0 top-0 w-full h-full')}>
          <Loading />
        </Center>
      )}
      <div className={cn({ 'opacity-50': isLoading }, 'w-full h-full', className)}>{children}</div>
    </>
  )
}
