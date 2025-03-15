import { zodLocale, localeCookieName } from '@repo/i18n-next/options'
import { z } from 'zod'

export const cookieStorageZodSchema = z.object({
  cookiesAccepted: z.boolean().optional(),
  [localeCookieName]: zodLocale.default('en'),
  colorTheme: z.union([z.literal('dark'), z.literal('light')]).optional(),
})
