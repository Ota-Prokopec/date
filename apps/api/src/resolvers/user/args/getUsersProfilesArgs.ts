import { builder } from '@/builder'
import { type AccountData, type NullableObject, type NullableObjectDeep } from '@repo/ts-types'
import { PartialDeep } from 'type-fest'

export type GetUsersProfilesArgs = {}

builder.inputType('GetUsersProfilesArgs', {
  fields: (t) => ({}),
})
