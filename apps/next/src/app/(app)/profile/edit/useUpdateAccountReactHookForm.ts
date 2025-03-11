import { type UpdateAccountFormData } from '@/components/forms/updateAccountForm/updateAccountFormZodSchema'
import { zodSchemas } from '@/components/forms/zodSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useUpdateAccountReactHookForm = (currentAccountData?: UpdateAccountFormData) => {
  const zodSchema = zodSchemas.updatingAccountForm.withErrorMessages.useZodSchema()

  return useForm<UpdateAccountFormData>({
    defaultValues: currentAccountData,
    mode: 'onSubmit',
    resolver: zodSchema && zodResolver(zodSchema),
    reValidateMode: 'onSubmit',
  })
}
