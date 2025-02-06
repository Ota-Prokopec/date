'use client';

import { Providers } from '@repo/ui/ts-react/contexts/Providers';
import { ReactNode } from 'react';
import { CookieStorageContextProvider } from '@repo/cookies';

export type LayoutProps = {
  children: ReactNode;
  ssrCookies: Record<string, any>;
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
  return <Providers>{children}</Providers>;
};
