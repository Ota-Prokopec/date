import type { FullAccountData, TypeCheck } from '@repo/ts-types'
import type { TypeOf } from 'zod'
import {
  getAccountFormDataZodSchemaWithErrorMessages,
  useAccountFormDataZodSchemaWithErrorMessages,
} from '../useAccountFormDataZodSchemaWithErrorMessages'

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

type C = TypeCheck<
  // ^?
  UpdateAccountFormData,
  TypeOf<
    NonNullable<Required<ReturnType<typeof useUpdateAccountFormDataZodSchemaWithErrorMessages>>>
  >
>
