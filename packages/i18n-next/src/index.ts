import { Locale as I18nLocale } from './i18n'
import { parseCookies } from '@repo/next-storage/handlers'
import type { IntlConfig } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { cookies as nextCookies } from 'next/headers'
import { zodLocale } from './options'

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
  const locale = zodLocale.optional().parse(ssrCookies['locale']) || 'en'

  const pages = await import(`../../i18n-translations/src/locales/${locale}/pages.json`)
  const components = await import(`../../i18n-translations/src/locales/${locale}/components.json`)

  return {
    locale: locale,
    timeZone: 'Europe/Prague',
    now: new Date(),
    messages: {
      pages: pages.default,
      components: components.default,
    },
  }
})
