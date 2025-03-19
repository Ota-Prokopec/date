'use client'

import { UpdateAccountForm } from '@/components/forms/UpdateAccountForm'

import {
  GetAccountProfileDocument,
  useGetAccountProfileSuspenseQuery,
  useUpdateAccountMutation,
} from '@/graphql/generated/apollo'
import type { UpdateAccountFormData } from '@repo/forms/account-updateAccountFormZodSchema'
import { accountDataZodSchema } from '@repo/ts-types'
import type { SubmitHandler } from 'react-hook-form'
import { useUpdateAccountReactHookForm } from './useUpdateAccountReactHookForm'

const EditProfilePage = () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const { data } = useGetAccountProfileSuspenseQuery({ fetchPolicy: 'network-only' })
  const form = useUpdateAccountReactHookForm(accountDataZodSchema.parse(data?.getAccountProfile))

  const [updateUserAccount] = useUpdateAccountMutation()

  //? Submit
  const onSubmit: SubmitHandler<UpdateAccountFormData> = async (data) => {
    await updateUserAccount({
      variables: { userProfileData: data },
      refetchQueries: [GetAccountProfileDocument],
    })
  }

  return <UpdateAccountForm form={form} onSubmit={onSubmit}></UpdateAccountForm>
}

export default EditProfilePage
