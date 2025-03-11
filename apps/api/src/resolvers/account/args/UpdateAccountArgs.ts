import { builder } from '@/builder'
import { type AccountData, type NullableObject, type NullableObjectDeep } from '@repo/ts-types'
import { PartialDeep } from 'type-fest'

export type UpdateAccountArgs = NullableObject<
  Partial<
    Pick<AccountData, 'bio' | 'birthDate' | 'gender' | 'lookingForGender' | 'username'> &
      NullableObject<Pick<AccountData, 'socials'>>
  >
>

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
