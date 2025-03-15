import { defineRouting } from 'next-intl/routing'
import { z } from 'zod'

export const zodLocale = z.union([z.literal('en'), z.literal('cs')])
export type Locale = z.TypeOf<typeof zodLocale>

export const locales: Locale[] & string[] = ['en', 'cs']
export const defaultLocale = 'en'

export const localeCookieName = 'locale'

export const i18nRouting = defineRouting({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
})
