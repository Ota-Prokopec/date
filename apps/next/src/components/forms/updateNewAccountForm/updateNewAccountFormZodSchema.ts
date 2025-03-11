import type { accountDataZodSchema, NonNullableObject } from '@repo/ts-types'
import type { TypeOf } from 'zod'
import { useAccountFormDataZodSchemaWithErrorMessages } from '../useAccountFormDataZodSchemaWithErrorMessages'

export type NewAccountFormData = Required<
  NonNullableObject<
    Pick<
      TypeOf<typeof accountDataZodSchema>,
      'username' | 'gender' | 'lookingForGender' | 'birthDate'
    >
  >
>
export const useUpdateNewAccountFormDataZodSchemaWithErrorMessages = () => {
  const zodSchema = useAccountFormDataZodSchemaWithErrorMessages().zodSchema?.pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  } satisfies Record<keyof NewAccountFormData, boolean>)
  return zodSchema
}
