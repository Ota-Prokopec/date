'use client'

import { NewAccountForm } from '@/components/forms/updateNewAccountForm/UpdateNewAccountForm'
import { type NewAccountFormData } from '@/components/forms/updateNewAccountForm/updateNewAccountFormZodSchema'
import { useSaveNewUserInformationMutation } from '@/graphql/generated/apollo'
import { cookieStorage } from '@repo/cookies'
import { Center } from '@repo/ui/components/common/Center'
import { useSuperEffect } from '@repo/ui/ts-lib/hooks/useSuperEffect'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { useUpdateNewAccountReactHookForm } from './useUpdateNewAccountReactHookForm'

const NewUserPage = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale')

  const t = useTranslations('pages.auth-newuser')
  const router = useRouter()
  const [updateInfo, updateInfoState] = useSaveNewUserInformationMutation()

  const form = useUpdateNewAccountReactHookForm()

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
