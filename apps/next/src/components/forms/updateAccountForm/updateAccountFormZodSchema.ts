import type { Equal, FullAccountData } from '@repo/ts-types'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'
import type { TypeOf } from 'zod'

export type UpdateAccountFormData = Pick<
  FullAccountData,
  'username' | 'gender' | 'lookingForGender' | 'birthDate' | 'bio' | 'socials'
>

export const useUpdateAccountFormDataZodSchemaWithErrorMessages = () =>
  useAccountFormDataZodSchemaWithErrorMessages().zodSchema?.pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
    bio: true,
    socials: true,
  } satisfies Record<keyof UpdateAccountFormData, boolean>)

type C = Equal<
  // ^?
  UpdateAccountFormData,
  TypeOf<
    NonNullable<Required<ReturnType<typeof useUpdateAccountFormDataZodSchemaWithErrorMessages>>>
  >
>
