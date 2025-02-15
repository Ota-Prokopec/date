'use client'

import { Providers } from '@repo/ui/ts-react/contexts/Providers'
import { ReactNode } from 'react'
import { CookieStorageContextProvider } from '@repo/cookies'
import type { AbstractIntlMessages } from 'next-intl'
import type { Locale } from '@repo/i18n-next'
import { apolloClient } from '@/graphql/apolloClient'

export type LayoutProps = {
  children: ReactNode
  ssrCookies: Record<string, any>
  ssrMessages: AbstractIntlMessages
  locale: Locale
}
export const Layout = ({ ssrCookies, children, ssrMessages, locale }: LayoutProps) => {
  return (
    <CookieStorageContextProvider ssrCookies={ssrCookies}>
      <ProvidersLayout locale={locale} ssrMessages={ssrMessages}>
        {children}
      </ProvidersLayout>
    </CookieStorageContextProvider>
  )
}

type ProvidersLayoutProps = {
  children: ReactNode
  ssrMessages: AbstractIntlMessages
  locale: Locale
}

const ProvidersLayout = ({ children, ssrMessages, locale }: ProvidersLayoutProps) => {
  return (
    <Providers
      apolloClient={apolloClient}
      intl={{ locale: locale, messages: ssrMessages, type: 'next' }}
    >
      {children}
    </Providers>
  )
}
