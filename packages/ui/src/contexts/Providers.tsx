'use client'

import { ApolloClient, ApolloProvider } from '@apollo/client'
import { HeroUIProvider } from '@heroui/react'
import { type Locale } from '@repo/i18n-next'
import { localStorage } from '@repo/local-storage'
import { NextIntlClientProvider, type AbstractIntlMessages, type Timezone } from 'next-intl'
import { useEffect, type ReactElement, type ReactNode } from 'react'
import { IntlProvider, type MessageFormatElement } from 'react-intl'
import { Client as UrqlClient, Provider as UrqlProvider } from 'urql'
import { useBrowser } from '../hooks/useBrowser'
import { PlayerContextProvier } from './PlayerContext'
import type { NormalizedCacheObject } from '@apollo/client'
import { cookieStorage } from '@repo/cookies'

export type ProvidersProps = {
  children: ReactNode
  intl?: {
    messages: AbstractIntlMessages
    locale: Locale
    type: 'next' | 'react'
    timeZone: Timezone
  }
  apolloClient?: ApolloClient<NormalizedCacheObject>
  urqlClient?: UrqlClient
}

export const Providers = ({ children, intl, apolloClient, urqlClient }: ProvidersProps) => {
  const { isBrower, setIsBrowser: _setIsBrowser } = useBrowser()
  const [colorTheme, setColorTheme] = cookieStorage.useStorageValue('colorTheme')

  useEffect(() => {
    if (isBrower) {
      if (colorTheme === 'dark') document.body.classList.add('dark')
      else document.body.classList.remove('dark')
    }
  }, [colorTheme])

  const Providers = (
    <HeroUIProvider className="w-[100vw] h-[100vh]">
      <localStorage.StorageContextProvider>
        <PlayerContextProvier>{children}</PlayerContextProvier>
      </localStorage.StorageContextProvider>
    </HeroUIProvider>
  )

  const additionalProviders: (({ children }: { children: ReactElement }) => ReactElement)[] = []

  //? - i18n-next
  if (intl?.type === 'next')
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <NextIntlClientProvider
        timeZone={intl.timeZone}
        messages={intl!?.messages}
        locale={intl!?.locale}
      >
        {children}
      </NextIntlClientProvider>
    ))

  //? - Apollo Client
  if (apolloClient)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    ))

  //? - Urql Client
  if (urqlClient)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <UrqlProvider value={urqlClient}>{children}</UrqlProvider>
    ))

  //? - i18n-react
  if (intl?.type === 'react')
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <IntlProvider
        messages={
          intl!?.messages as Record<string, string> | Record<string, MessageFormatElement[]>
        }
        locale={intl!?.locale}
      >
        {children}
      </IntlProvider>
    ))

  return additionalProviders.reduce((acc, prov) => prov({ children: acc }), Providers)
}
