import type { Equal, FullAccountData } from '@repo/ts-types'
import {
  getAccountFormDataZodSchemaWithErrorMessages,
  useAccountFormDataZodSchemaWithErrorMessages,
} from '../useAccountFormDataZodSchemaWithErrorMessages'
import type { TypeOf } from 'zod'

export type UpdateAccountFormData = Pick<
  FullAccountData,
  'username' | 'gender' | 'lookingForGender' | 'birthDate' | 'bio' | 'socials'
>

const pick = {
  username: true,
  gender: true,
  lookingForGender: true,
  birthDate: true,
  bio: true,
  socials: true,
} satisfies Record<keyof UpdateAccountFormData, boolean>

export const useUpdateAccountFormDataZodSchemaWithErrorMessages = () =>
  useAccountFormDataZodSchemaWithErrorMessages()?.pick(pick)

export const getUpdateAccountFormDataZodSchemaWithErrorMessages = async () =>
  (await getAccountFormDataZodSchemaWithErrorMessages()).pick(pick)

type C = Equal<
  // ^?
  UpdateAccountFormData,
  TypeOf<
    NonNullable<Required<ReturnType<typeof useUpdateAccountFormDataZodSchemaWithErrorMessages>>>
  >
>
