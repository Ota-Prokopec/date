import type { AccountData, NonNullableObject } from '@repo/ts-types'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'

export type UserAccountFormData = Required<
  NonNullableObject<Pick<AccountData, 'username' | 'gender' | 'lookingForGender' | 'birthDate'>>
> &
  Pick<AccountData, 'bio' | 'socials'>

export const useUserAccountFormDataZodSchemaWithErrorMessages = () =>
  useAccountFormDataZodSchemaWithErrorMessages()
    .zodSchema?.pick({
      username: true,
      gender: true,
      lookingForGender: true,
      birthDate: true,
      bio: true,
      socials: true,
    } satisfies Record<keyof UserAccountFormData, boolean>)
    .partial({ bio: true, socials: true })
