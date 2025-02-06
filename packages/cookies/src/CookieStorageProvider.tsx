import { type ReactNode } from 'react';
import { cookieStorage } from './cookieStorage';
import { cookieStorageZodSchema } from './cookieStorageOptions';

export type CookieStorageContextProviderProps = {
  children: ReactNode;
  ssrCookies: Record<string, any>;
};

export const CookieStorageContextProvider = ({ children, ssrCookies }: CookieStorageContextProviderProps) => {
  return (
    <cookieStorage.StorageContextProvider initialData={cookieStorageZodSchema.parse(ssrCookies)}>
      {children}
    </cookieStorage.StorageContextProvider>
  );
};
