'use client';

import { apolloClient } from '@/graphql/clients/apolloClient';
import { CookieStorageContextProvider } from '@repo/cookies';
import { Providers } from '@repo/ui/ts-react/contexts/Providers';
import { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
  ssrCookies: Record<string, unknown>;
};
export const Layout = ({ ssrCookies, children }: LayoutProps) => {
  return (
    <CookieStorageContextProvider ssrCookies={ssrCookies}>
      <ProvidersLayout>{children}</ProvidersLayout>
    </CookieStorageContextProvider>
  );
};

type ProvidersLayoutProps = { children: ReactNode };

const ProvidersLayout = ({ children }: ProvidersLayoutProps) => {
  return <Providers apolloClient={apolloClient}>{children}</Providers>;
};
