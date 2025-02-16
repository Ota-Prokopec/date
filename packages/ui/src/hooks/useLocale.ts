'use client'

import { cookieStorage } from '@repo/cookies'
import { useRouter } from '@repo/i18n-next/routing'
import { useSuperEffect } from './useSuperEffect'

export const useLocale = (disableRefreshing?: boolean) => {
  const router = useRouter()

  const [locale, setLocale] = cookieStorage.useStorageValue('locale')
  useSuperEffect(
    () => {
      router.refresh()
    },
    [locale],
    { mountedOnly: true, disable: disableRefreshing }
  )

  return { locale, setLocale }
}
