'use client';

import { cookieStorage } from '@repo/cookies';

export const useLocale = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale');
  return { locale, setLocale };
};
