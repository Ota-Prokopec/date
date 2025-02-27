import type { FullAccountData } from '@repo/ts-types'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'

export type UserAccountFormData = Pick<
  FullAccountData,
  'username' | 'gender' | 'lookingForGender' | 'birthDate' | 'bio' | 'socials'
>

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
