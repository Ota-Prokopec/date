'use client'

import type { NewAccountFormData } from '@/components/forms/updateNewAccountForm/newAccountUpdateAccountTypes'
import { NewAccountForm } from '@/components/forms/updateNewAccountForm/UpdateNewAccountForm'
import { useAccountFormDataZodSchemaWithErrorMessages } from '@/components/forms/useAccountFormDataZodSchemaWithErrorMessages'
import { useSaveNewUserInformationMutation } from '@/graphql/generated/apollo'
import { zodResolver } from '@hookform/resolvers/zod'
import { cookieStorage } from '@repo/cookies'
import { Center } from '@repo/ui/components/common/Center'
import { useSuperEffect } from '@repo/ui/ts-lib/hooks/useSuperEffect'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

const NewUserPage = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale')

  const t = useTranslations('pages.auth-newuser')
  const router = useRouter()
  const { zodSchema: formDataZodSchema } = useAccountFormDataZodSchemaWithErrorMessages()
  const [updateInfo, updateInfoState] = useSaveNewUserInformationMutation()

  //* Forms
  const form = useForm<NewAccountFormData>({
    defaultValues: {
      gender: 'male',
      lookingForGender: 'female',
      birthDate: new Date(),
      username: '',
    },
    reValidateMode: 'onSubmit',
    resolver: formDataZodSchema ? zodResolver(formDataZodSchema) : undefined,
  })

  //* Submit
  const onSubmit: SubmitHandler<NewAccountFormData> = async (data) => {
    await updateInfo({ variables: data })
    router.push('/')
  }

  //! update errors toast
  useSuperEffect(
    () => {
      toast.error(t('updateErrorMessage'), { dismissible: true })
    },
    [updateInfoState.error],
    { mountedOnly: true }
  )

  return (
    <Center className="w-full p-4 flex-col gap-10">
      <NewAccountForm
        onSubmit={onSubmit}
        isLoading={updateInfoState.loading}
        className="max-w-[400px]"
        form={form}
      ></NewAccountForm>
    </Center>
  )
}

export default NewUserPage
