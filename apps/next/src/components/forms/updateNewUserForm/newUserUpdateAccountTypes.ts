import type { accountDataZodSchema, NonNullableObject } from '@repo/ts-types'
import type { TypeOf } from 'zod'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'

export type NewUserAccountFormData = Required<
  NonNullableObject<
    Pick<
      TypeOf<typeof accountDataZodSchema>,
      'username' | 'gender' | 'lookingForGender' | 'birthDate'
    >
  >
>
export const useNewUserAccountFormDataZodSchemaWithErrorMessages = () =>
  useAccountFormDataZodSchemaWithErrorMessages().zodSchema?.pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  } satisfies Record<keyof NewUserAccountFormData, boolean>)
