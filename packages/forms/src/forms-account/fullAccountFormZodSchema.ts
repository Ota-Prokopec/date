import { cookieStorage } from '@repo/cookies'
import { loadMessages } from '@repo/i18n-next/loadMessages'
import { useMessages } from '@repo/i18n-next/react/useMessages'
import { accountDataZodSchema } from '@repo/ts-types'
import { useEffect, useState } from 'react'
import { z } from 'zod'

export const getFullAccountFormZodSchema = (
  errorMessages: IntlMessages['forms']['accountFormErrorMessages']
) => {
  return z.object({
    username: accountDataZodSchema.shape.username
      .min(3, {
        message: errorMessages.username,
      })
      .max(40, { message: errorMessages.username })
      .nonempty({ message: errorMessages['fillAllRequiredFields'] }),
    birthDate: accountDataZodSchema.shape.birthDate.refine((date) => !isNaN(date.getTime()), {
      message: errorMessages.birthDate,
    }),
    bio: accountDataZodSchema.shape.bio,
    socials: accountDataZodSchema.shape.socials
      .refine((arg) => z.string().url().safeParse(arg.facebook?.link).success, {
        message: errorMessages.socials.invalidLink.facebook,
      })
      .refine((arg) => z.string().url().safeParse(arg.instagram?.link).success, {
        message: errorMessages.socials.invalidLink.instagram,
      }),
    gender: accountDataZodSchema.shape.gender.refine((val) => ['male', 'female'].includes(val), {
      message: errorMessages.gender,
    }),
    lookingForGender: accountDataZodSchema.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: errorMessages.lookingForGender }
    ),
    userId: accountDataZodSchema.shape.userId
      .min(3, {
        message: errorMessages.userId,
      })
      .max(25, { message: errorMessages.userId }),
  })
}

export const getFullAccountFormZodSchemaWithErrorMessages = async () => {
  const locale = cookieStorage.proxyStorage().locale
  const messages = await loadMessages({
    locale,
    paths: ['forms'],
  })
  return getFullAccountFormZodSchema(messages.forms.accountFormErrorMessages)
}

export const useFullAccountFormZodSchemaWithErrorMessages = () => {
  type ZodSchema = ReturnType<typeof getFullAccountFormZodSchema>

  const { messages } = useMessages('forms.accountFormErrorMessages')
  const [zodSchema, setZodSchema] = useState<ZodSchema | undefined>(undefined)

  useEffect(() => {
    if (messages) setZodSchema(getFullAccountFormZodSchema(messages))
  }, [messages])

  return zodSchema
}
