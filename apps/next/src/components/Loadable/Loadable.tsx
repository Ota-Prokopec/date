import { Center } from '@repo/ui/components/common/Center'
import { Loading } from '@repo/ui/components/common/Loading'
import { Suspense, type JSX, type ReactNode } from 'react'

const LoadingPage = () => {
  return (
    <Center className="w-full h-full items-center justify-center">
      <Loading></Loading>
    </Center>
  )
}

export const Loadable = (children: () => ReactNode) => {
  return () => <Suspense fallback={<LoadingPage />}>{children()}</Suspense>
}
