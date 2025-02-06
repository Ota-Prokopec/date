'use client';

import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';
import { HeroUIProvider } from '@heroui/react';
import { useColorTheme } from '@repo/color-theme/colorThemeHook';
import { localStorage } from '@repo/local-storage';
import { type AbstractIntlMessages } from 'next-intl';
import { useEffect, type FC, type ReactElement, type ReactNode } from 'react';
import { IntlProvider, type MessageFormatElement } from 'react-intl';
import { useBrowser } from '../hooks/useBrowser';
import { PlayerContextProvier } from './PlayerContext';

export type ProvidersProps = {
  children: ReactNode;
  intl?: {
    messages: AbstractIntlMessages;
    locale: Locale;
    type: 'next' | 'react';
  };

  apolloClient?: ApolloClient<NormalizedCacheObject>;
};

export const Providers = ({ children, intl, apolloClient }: ProvidersProps) => {
  const { isBrower, setIsBrowser } = useBrowser();

  const { colorTheme, setColorTheme } = useColorTheme();
  useEffect(() => {
    if (isBrower) {
      if (colorTheme === 'dark') document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    }
  }, [colorTheme]);

  const Providers = (
    <HeroUIProvider className="w-[100vw] h-[100vh]">
      <localStorage.StorageContextProvider>
        <PlayerContextProvier>{children}</PlayerContextProvier>
      </localStorage.StorageContextProvider>
    </HeroUIProvider>
  );

  // const ProvidersWithNextIntlClient = (
  //   <NextIntlClientProvider messages={intl!?.messages} locale={intl!?.locale}>
  //     {Providers}
  //   </NextIntlClientProvider>
  // );

  const additionalProviders: (({ children }: { children: ReactElement }) => ReactElement)[] = [];

  if (apolloClient)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    ));
  if (intl)
    additionalProviders.push(({ children }: { children: ReactNode }) => (
      <IntlProvider
        messages={
          intl!?.messages as Record<string, string> | Record<string, MessageFormatElement[]>
        }
        locale={intl!?.locale}
      >
        {children}
      </IntlProvider>
    ));

  return additionalProviders.reduce((acc, prov) => prov({ children: acc }), Providers);
};
