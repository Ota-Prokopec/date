import {
  useUserAccountFormDataZodSchemaWithErrorMessages,
  type UserAccountFormData,
} from '@/components/forms/updateAccountForm/updateUserFomr'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useEditUserProfileReactHookForm = (currentAccountData?: UserAccountFormData) => {
  const zodSchema = useUserAccountFormDataZodSchemaWithErrorMessages()

  return useForm<UserAccountFormData>({
    defaultValues: currentAccountData,
    reValidateMode: 'onSubmit',
    resolver: zodSchema && zodResolver(zodSchema),
  })
}
