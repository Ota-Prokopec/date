'use client'

import { UpdateNewAccountForm } from '@/components/forms/UpdateNewAccountForm'
import { useSaveNewUserInformationMutation } from '@/graphql/generated/apollo'
import { cookieStorage } from '@repo/cookies'
import type { UpdateNewAccountFormData } from '@repo/forms/account-updateNewAccountFormZodSchema'
import { Center } from '@repo/ui/components/common/Center'
import { useSuperEffect } from '@repo/ui/ts-lib/hooks/useSuperEffect'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { useUpdateNewAccountReactHookForm } from './useUpdateNewAccountReactHookForm'
import { GetAccountProfileDocument } from '@/graphql/generated/typescript'

const NewUserPage = () => {
  const t = useTranslations('pages.auth-newuser')
  const router = useRouter()
  const [updateInfo, updateInfoState] = useSaveNewUserInformationMutation()

  const form = useUpdateNewAccountReactHookForm()

  //* Submit
  const onSubmit: SubmitHandler<UpdateNewAccountFormData> = async (data) => {
    await updateInfo({ variables: data, refetchQueries: [GetAccountProfileDocument] })
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
      <UpdateNewAccountForm
        onSubmit={onSubmit}
        isLoading={updateInfoState.loading}
        className="max-w-[400px]"
        form={form}
      ></UpdateNewAccountForm>
    </Center>
  )
}

export default NewUserPage
