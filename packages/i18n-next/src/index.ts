import { Locale as I18nLocale } from './i18n'
import { parseCookies } from '@repo/next-storage/handlers'
import type { IntlConfig } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { cookies as nextCookies } from 'next/headers'
import { localeCookieName, localeZodSchema } from './options'
import { loadMessages } from './loadMessages'

export type Locale = I18nLocale

export type RequestConfig = Omit<IntlConfig, 'locale'> & {
  locale?: IntlConfig['locale']
}

export type GetRequestConfigParams = {
  locale: string
}

export type GetRequestConfig = (
  params: GetRequestConfigParams
) => RequestConfig | Promise<RequestConfig>

export const getRequest = getRequestConfig(async () => {
  const cookies = await nextCookies()

  const ssrCookies = parseCookies(cookies.getAll())
  const locale: Locale = localeZodSchema.optional().parse(ssrCookies[localeCookieName]) || 'en'

  const messages = await loadMessages({ locale })

  return {
    locale: locale,
    timeZone: 'Europe/Prague',
    now: new Date(),
    messages: messages,
  }
})

export { loadMessages, localeCookieName }
