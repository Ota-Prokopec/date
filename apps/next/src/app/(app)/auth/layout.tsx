'use client'

import { LoadingPageProvider } from '@/components/Loadable/LoadingPage/LoadingPageProvider'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <LoadingPageProvider className="items-center justify-center flex p-20">
      {children}
    </LoadingPageProvider>
  )
}

export default Layout
