import type { NewAccountFormData } from '@/components/forms/updateNewAccountForm/updateNewAccountFormZodSchema'
import { zodSchemas } from '@/components/forms/zodSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const useUpdateNewAccountReactHookForm = () => {
  const zodSchema = zodSchemas.updatingNewAccountForm.withErrorMessages.useZodSchema()

  return useForm<NewAccountFormData>({
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
