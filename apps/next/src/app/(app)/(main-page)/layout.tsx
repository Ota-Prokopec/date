'use client'

import { Center } from '@repo/ui/components/common/Center'
import { SwipingCardContextProvider } from '@repo/ui/tsx/components/common/SwipingCard'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SwipingCardContextProvider>
      <Center className="p-4 w-full h-auto pc:h-[100vh]">{children}</Center>
    </SwipingCardContextProvider>
  )
}

export default Layout
