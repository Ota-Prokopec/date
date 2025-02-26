import { builder } from '@/builder'
import { type AccountData, type NullableObject, type NullableObjectDeep } from '@repo/ts-types'
import { PartialDeep } from 'type-fest'

export type UpdateAccountArgs = NullableObject<
  Partial<
    Pick<AccountData, 'bio' | 'birthDate' | 'gender' | 'lookingForGender' | 'socials' | 'username'>
  >
>

builder.inputType('UpdateAccountArgs', {
  fields: (t) => ({
    username: t.string({ required: false }),
    bio: t.field({ type: 'String', required: false }),
    gender: t.field({ type: 'Gender', required: false }),
    birthDate: t.field({ type: 'Date', required: false }),
    lookingForGender: t.field({ type: 'Gender', required: false }),
    socials: t.field({ type: 'Socials', required: false }),
  }),
})
