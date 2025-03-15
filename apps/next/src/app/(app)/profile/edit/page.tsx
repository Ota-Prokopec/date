'use client'

import { UpdateAccountForm } from '@/components/forms/UpdateAccountForm'

import {
  useGetAccountProfileSuspenseQuery,
  useUpdateAccountMutation,
} from '@/graphql/generated/apollo'
import type { UpdateAccountFormData } from '@repo/forms/account-updateAccountFormZodSchema'
import { accountDataZodSchema } from '@repo/ts-types'
import { useTranslations } from 'next-intl'
import type { SubmitHandler } from 'react-hook-form'
import { useUpdateAccountReactHookForm } from './useUpdateAccountReactHookForm'
import { useEffect } from 'react'

const EditProfilePage = () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const { data } = useGetAccountProfileSuspenseQuery()
  const form = useUpdateAccountReactHookForm(accountDataZodSchema.parse(data?.getAccountProfile))

  const t = useTranslations('pages.profile-edit')

  const [updateUserAccount, UpdatingUserAccountState] = useUpdateAccountMutation()

  const values = form.watch()

  //? Submit
  const onSubmit: SubmitHandler<UpdateAccountFormData> = async (data) => {
    await updateUserAccount({ variables: { userProfileData: data } })
  }

  return <UpdateAccountForm form={form} onSubmit={onSubmit}></UpdateAccountForm>
}

export default EditProfilePage
