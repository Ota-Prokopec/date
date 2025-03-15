import type { AccountData } from '@repo/ts-types'
import {
  getFullAccountFormZodSchema,
  getFullAccountFormZodSchemaWithErrorMessages,
  useFullAccountFormZodSchemaWithErrorMessages,
} from './fullAccountFormZodSchema'

export type UpdateNewAccountFormData = Pick<
  AccountData,
  'username' | 'gender' | 'lookingForGender' | 'birthDate'
>

const pick = {
  username: true,
  gender: true,
  lookingForGender: true,
  birthDate: true,
} satisfies Record<keyof UpdateNewAccountFormData, boolean>

export const getUpdateNewAccountFormZodSchema = (
  errorMessages: IntlMessages['forms']['accountFormErrorMessages']
) => getFullAccountFormZodSchema(errorMessages).pick(pick)

export const getUpdateNewAccountFormZodSchemaWithErrorMessages = async () =>
  (await getFullAccountFormZodSchemaWithErrorMessages()).pick(pick)

export const useUpdateNewAccountFormZodSchemaWithErrorMessages = () => {
  return useFullAccountFormZodSchemaWithErrorMessages()?.pick(pick)
}
