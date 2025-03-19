import {
  socialProfileDataZodSchema,
  socialProfilePlatformZodSchema,
  socialsDataZodSchema,
  type SocialsData,
} from '@repo/ts-types'
import { z } from 'zod'

type SocialsErrorMessages = IntlMessages['forms']['accountFormErrorMessages']['socials']

export const getSocialsFormZodSchema = (errorMessages: SocialsErrorMessages) => {
  return socialsDataZodSchema.superRefine((args, ctx) => {
    Object.entries(args).map(([platform, data]) => {
      const result = z.string().url().optional().safeParse(data?.link).success
      if (!result)
        ctx.addIssue({
          code: 'invalid_string',
          message: errorMessages['invalidLink'][socialProfilePlatformZodSchema.parse(platform)],
          validation: 'url',
        })
    })
  })
}
