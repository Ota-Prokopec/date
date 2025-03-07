'use client'

import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider'
import { HeroUIProvider } from '@heroui/react'
import { useColorTheme } from '@repo/color-theme/colorThemeHook'
import { type Locale } from '@repo/i18n-next'
import { localStorage } from '@repo/local-storage'
import { NextIntlClientProvider, type AbstractIntlMessages, type Timezone } from 'next-intl'
import { useEffect, type ReactElement, type ReactNode } from 'react'
import { IntlProvider, type MessageFormatElement } from 'react-intl'
import { useBrowser } from '../hooks/useBrowser'
import { PlayerContextProvier } from './PlayerContext'
import { Client as UrqlClient, Provider as UrqlProvider } from 'urql'

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
  const { colorTheme, setColorTheme: _setColorTheme } = useColorTheme()

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

  if (apolloClient)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    ))
  if (urqlClient)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <UrqlProvider value={urqlClient}>{children}</UrqlProvider>
    ))
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
