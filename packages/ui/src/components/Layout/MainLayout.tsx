import { type ApolloClient, type NormalizedCacheObject } from '@apollo/client';
import { CookieStorageContextProvider } from '@repo/cookies';
import { type AbstractIntlMessages } from 'next-intl';
import { type ReactNode } from 'react';
import { Client, Provider as UrqlProvider } from 'urql';
import { Providers } from '../../contexts/Providers';
import { useLocale } from '../../hooks/useLocale';

export type MainLayoutProps = {
  children: ReactNode;
  ssrCookies: Record<string, any>;
  urqlGraphqlClient?: Client;
  intl?: {
    type: 'next' | 'react';
    ssrMessages: AbstractIntlMessages;
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
};

export const MainLayout = ({ ssrCookies, children, intl, urqlGraphqlClient, apolloClient }: MainLayoutProps) => {
  const Providers = (
    <ProvidersLayout apolloClient={apolloClient} intl={intl}>
      {children}
    </ProvidersLayout>
  );

  return (
    <CookieStorageContextProvider ssrCookies={ssrCookies}>
      {urqlGraphqlClient ? <UrqlProvider value={urqlGraphqlClient}>{Providers}</UrqlProvider> : Providers}
    </CookieStorageContextProvider>
  );
};

type ProvidersLayoutProps = {
  children: ReactNode;
  intl?: {
    ssrMessages: AbstractIntlMessages;
    type: 'next' | 'react';
  };
  apolloClient?: ApolloClient<NormalizedCacheObject>;
};

const ProvidersLayout = ({ children, intl, apolloClient }: ProvidersLayoutProps) => {
  const locale = useLocale().locale || 'en';

  return (
    <Providers
      apolloClient={apolloClient}
      intl={intl ? { locale: locale, messages: intl.ssrMessages, type: intl.type } : undefined}
    >
      {children}
    </Providers>
  );
};
