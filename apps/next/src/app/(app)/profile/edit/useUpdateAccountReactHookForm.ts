import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  UpdateAccountFormData,
  useUpdateAccountFormZodSchemaWithErrorMessages,
} from '@repo/forms/account-updateAccountFormZodSchema'

export const useUpdateAccountReactHookForm = (currentAccountData?: UpdateAccountFormData) => {
  const zodSchema = useUpdateAccountFormZodSchemaWithErrorMessages()

  return useForm<UpdateAccountFormData>({
    defaultValues: currentAccountData,
    mode: 'onSubmit',
    resolver: zodSchema && zodResolver(zodSchema),
    reValidateMode: 'onSubmit',
  })
}
