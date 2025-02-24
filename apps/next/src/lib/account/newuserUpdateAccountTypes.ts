import type { accountDataZodSchema, NonNullableObject } from '@repo/ts-types'
import type { TypeOf } from 'zod'
import { useAccountDataZodSchemaWithErrorMessages } from './useAccountDataZodSchemaWithErrorMessages'

export type NewUserFormData = Required<
  NonNullableObject<
    Pick<
      TypeOf<typeof accountDataZodSchema>,
      'username' | 'gender' | 'lookingForGender' | 'birthDate'
    >
  >
>

export const useNewuserUpdateAccountDataZodSchemaWithErrorMessages = () =>
  useAccountDataZodSchemaWithErrorMessages().zodSchema?.pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  } satisfies Record<keyof NewUserFormData, boolean>)
