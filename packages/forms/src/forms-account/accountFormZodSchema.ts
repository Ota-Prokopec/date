import { cookieStorage } from '@repo/cookies'
import { loadMessages } from '@repo/i18n-next/loadMessages'
import { useMessages } from '@repo/i18n-next/react/useMessages'
import { accountDataZodSchema, type SocialProfilePlatform } from '@repo/ts-types'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { getSocialsFormZodSchema } from './socialsFormZodSchema'

//!! Pozor - toto neznamená, že by to byl plný (vyplněný) účet, toto znamená, že je to celé schéma, se vším, je tu každé property, které u account form může být
//!! Attention - this does not mean that the account if full (fully filled up) account, this means that the schema is full, all the properties associated with account form are there
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
    socials: getSocialsFormZodSchema(errorMessages['socials']),

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
