import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  useUpdateNewAccountFormZodSchemaWithErrorMessages,
  UpdateNewAccountFormData,
} from '@repo/forms/account-updateNewAccountFormZodSchema'

export const useUpdateNewAccountReactHookForm = () => {
  const zodSchema = useUpdateNewAccountFormZodSchemaWithErrorMessages()

  return useForm<UpdateNewAccountFormData>({
    defaultValues: {
      gender: 'male',
      lookingForGender: 'female',
      birthDate: new Date(),
      username: '',
    },
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  })
}
