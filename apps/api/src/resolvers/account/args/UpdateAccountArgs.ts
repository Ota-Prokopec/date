import { builder } from '@/builder'
import type { AccountData, Nullable } from '@repo/ts-types'

export type UpdateAccountArgs = Nullable<
  Partial<
    Pick<AccountData, 'bio' | 'birthDate' | 'gender' | 'lookingForGender' | 'socials' | 'username'>
  >
>

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
