'use client'

import { Providers } from '@repo/ui/contexts/Providers'
import { ReactNode } from 'react'
import { CookieStorageContextProvider } from '@repo/cookies'
import type { AbstractIntlMessages, Timezone } from 'next-intl'
import type { Locale } from '@repo/i18n-next'
import { getApolloClient } from '@graphql/apollo/apolloClient'
import { urqlClient } from '@graphql/urql/urqlClient'

export type LayoutProps = {
  children: ReactNode
  ssrCookies: Record<string, unknown>
  ssrMessages: AbstractIntlMessages
  locale: Locale
  timeZone: Timezone
}
export const Layout = ({ ssrCookies, children, ssrMessages, locale, timeZone }: LayoutProps) => {
  return (
    <CookieStorageContextProvider ssrCookies={ssrCookies}>
      <ProvidersLayout timeZone={timeZone} locale={locale} ssrMessages={ssrMessages}>
        {children}
      </ProvidersLayout>
    </CookieStorageContextProvider>
  )
}

type ProvidersLayoutProps = {
  children: ReactNode
  ssrMessages: AbstractIntlMessages
  locale: Locale
  timeZone: Timezone
}

const ProvidersLayout = ({ children, ssrMessages, locale, timeZone }: ProvidersLayoutProps) => {
  const apolloClient = getApolloClient()

  return (
    <Providers
      apolloClient={apolloClient}
      urqlClient={urqlClient}
      intl={{ locale: locale, messages: ssrMessages, type: 'next', timeZone }}
    >
      {children}
    </Providers>
  )
}
