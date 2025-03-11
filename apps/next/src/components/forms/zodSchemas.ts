import { useUpdateAccountFormDataZodSchemaWithErrorMessages } from './updateAccountForm/updateAccountFormZodSchema'
import { useUpdateNewAccountFormDataZodSchemaWithErrorMessages } from './updateNewAccountForm/updateNewAccountFormZodSchema'
import { useAccountFormDataZodSchemaWithErrorMessages } from './useAccountFormDataZodSchemaWithErrorMessages'

export const zodSchemas = {
  updatingAccountForm: {
    withErrorMessages: {
      useZodSchema: useUpdateAccountFormDataZodSchemaWithErrorMessages,
    },
  },
  updatingNewAccountForm: {
    withErrorMessages: {
      useZodSchema: useUpdateNewAccountFormDataZodSchemaWithErrorMessages,
    },
  },
  accountForm: {
    withErrorMessages: {
      useZodSchema: useAccountFormDataZodSchemaWithErrorMessages,
    },
  },
}
