import type { Equal, FullAccountData } from '@repo/ts-types'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'
import type { TypeOf } from 'zod'

export type UserAccountFormData = Pick<
  FullAccountData,
  'username' | 'gender' | 'lookingForGender' | 'birthDate' | 'bio' | 'socials'
>

export const useUserAccountFormDataZodSchemaWithErrorMessages = () =>
  useAccountFormDataZodSchemaWithErrorMessages().zodSchema?.pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
    bio: true,
    socials: true,
  } satisfies Record<keyof UserAccountFormData, boolean>)

type C = Equal<
  // ^?
  UserAccountFormData,
  TypeOf<NonNullable<Required<ReturnType<typeof useUserAccountFormDataZodSchemaWithErrorMessages>>>>
>
