import { builder } from '@/builder'
import { validator } from '@/lib/validation/pothosValidator'
import {
  accountDataZodSchema,
  zodNullishProperties,
  type AccountData,
  type NullableObject,
} from '@repo/ts-types'
import { z } from 'zod'

export type UpdateAccountArgs = NullableObject<
  Partial<
    Pick<AccountData, 'bio' | 'birthDate' | 'gender' | 'lookingForGender' | 'username'> &
      NullableObject<Pick<AccountData, 'socials'>>
  >
>

const zodSchemaPick = {
  bio: true,
  birthDate: true,
  gender: true,
  lookingForGender: true,
  socials: true,
  username: true,
} satisfies Record<keyof UpdateAccountArgs, true>

export const updateAccountArgsZodSchemaValidator = validator(
  z.object({
    userProfileData: zodNullishProperties(accountDataZodSchema.pick(zodSchemaPick), zodSchemaPick),
  })
)

builder.inputType('UpdateAccountArgs', {
  fields: (t) => ({
    username: t.field({ type: 'String', required: false }),
    bio: t.field({ type: 'String', required: false }),
    gender: t.field({ type: 'Gender', required: false }),
    birthDate: t.field({ type: 'Date', required: false }),
    lookingForGender: t.field({ type: 'Gender', required: false }),
    socials: t.field({ type: 'Socials', required: false }),
  }),
})
