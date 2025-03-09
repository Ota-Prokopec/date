import {
  useUpdateAccountFormDataZodSchemaWithErrorMessages,
  type UpdateAccountFormData,
} from '@/components/forms/updateAccountForm/updateAccountFormZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useUpdateAccountReactHookForm = (currentAccountData?: UpdateAccountFormData) => {
  const zodSchema = useUpdateAccountFormDataZodSchemaWithErrorMessages()

  return useForm<UpdateAccountFormData>({
    defaultValues: currentAccountData,
    mode: 'onSubmit',
    resolver: zodSchema && zodResolver(zodSchema),
    reValidateMode: 'onSubmit',
  })
}
