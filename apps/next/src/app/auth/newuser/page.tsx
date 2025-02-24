'use client'

import { NewUserForm } from '@/components/forms/NewUserForm'
import { useSaveNewUserInformationMutation } from '@/graphql/generated/apollo'
import {
  useNewuserUpdateAccountDataZodSchemaWithErrorMessages,
  type NewUserFormData,
} from '@/lib/account/newuserUpdateAccountTypes'
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
  const translationsAccountZodSchema = useTranslations('others.accountZodSchemaWithErrorMessages')
  const translationsAuthNewuserPage = useTranslations('pages.auth-newuser')
  const router = useRouter()
  const formDataZodSchema = useNewuserUpdateAccountDataZodSchemaWithErrorMessages()
  const [updateInfo, updateInfoState] = useSaveNewUserInformationMutation()

  //* Forms
  const form = useForm<NewUserFormData>({
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
  const onSubmit: SubmitHandler<NewUserFormData> = async (data) => {
    await updateInfo({ variables: data })
    router.push('/')
  }

  //! update errors toast
  useSuperEffect(
    () => {
      toast.error(translationsAuthNewuserPage('updateErrorMessage'), { dismissible: true })
    },
    [updateInfoState.error],
    { mountedOnly: true }
  )

  return (
    <Center className="w-full p-4 flex-col gap-10">
      <NewUserForm
        onSubmit={onSubmit}
        isLoading={updateInfoState.loading}
        className="max-w-[400px]"
        form={form}
      ></NewUserForm>
    </Center>
  )
}

export default NewUserPage
