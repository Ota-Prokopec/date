import { zodLocale } from '@repo/i18n-next/options'
import { z } from 'zod'
import { colorThemeZod } from '../../color-theme/src/options'

export const cookieStorageZodSchema = z.object({
  cookiesAccepted: z.boolean().optional(),
  locale: zodLocale.default('en'),
  colorTheme: colorThemeZod.optional(),
})
