import { builder } from '@/builder'
import { type AccountData, type NullableObjectDeep } from '@repo/ts-types'
import { PartialDeep } from 'type-fest'

export type UpdateAccountArgs = NullableObjectDeep<
  PartialDeep<
    Pick<AccountData, 'bio' | 'birthDate' | 'gender' | 'lookingForGender' | 'socials' | 'username'>
  >
>

type T = UpdateAccountArgs['socials']

builder.inputType('UpdateAccountArgs', {
  fields: (t) => ({
    username: t.string({ required: false }),
    bio: t.string({ required: false }),
    gender: t.field({ type: 'Gender', required: false }),
    birthDate: t.field({ type: 'Date', required: false }),
    lookingForGender: t.field({ type: 'Gender', required: false }),
    socials: t.field({ type: 'Socials', required: false }),
  }),
})
