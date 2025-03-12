'use client'

import { UpdateUserForm } from '@/components/forms/updateAccountForm/UpdateAccountForm'
import type { UpdateAccountFormData } from '@/components/forms/updateAccountForm/updateAccountFormZodSchema'
import {
  useGetAccountProfileSuspenseQuery,
  useUpdateAccountMutation,
} from '@/graphql/generated/apollo'
import { fullAccountDataZodSchema } from '@repo/ts-types'
import { useTranslations } from 'next-intl'
import type { SubmitHandler } from 'react-hook-form'
import { useUpdateAccountReactHookForm } from './useUpdateAccountReactHookForm'

const EditProfilePage = () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const { data } = useGetAccountProfileSuspenseQuery()
  const form = useUpdateAccountReactHookForm(
    fullAccountDataZodSchema.parse(data?.getAccountProfile)
  )

  const t = useTranslations('pages.profile-edit')

  const [updateUserAccount, UpdatingUserAccountState] = useUpdateAccountMutation()

  //? Submit
  const onSubmit: SubmitHandler<UpdateAccountFormData> = async (data) => {
    await updateUserAccount({ variables: { userProfileData: data } })
  }

  console.log('render')

  return <UpdateUserForm form={form} onSubmit={onSubmit}></UpdateUserForm>
}

export default EditProfilePage
