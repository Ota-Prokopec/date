import type { AccountData } from '@repo/ts-types'
import {
  getFullAccountFormZodSchema,
  getFullAccountFormZodSchemaWithErrorMessages,
  useFullAccountFormZodSchemaWithErrorMessages,
} from './fullAccountFormZodSchema'

export type UpdateAccountFormData = Pick<
  AccountData,
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

export const getUpdateAccountFormZodSchema = (
  errorMessages: IntlMessages['forms']['accountFormErrorMessages']
) => getFullAccountFormZodSchema(errorMessages).pick(pick)

export const getUpdateAccountFormZodSchemaWithErrorMessages = async () =>
  (await getFullAccountFormZodSchemaWithErrorMessages()).pick(pick)

export const useUpdateAccountFormZodSchemaWithErrorMessages = () => {
  return useFullAccountFormZodSchemaWithErrorMessages()?.pick(pick)
}
