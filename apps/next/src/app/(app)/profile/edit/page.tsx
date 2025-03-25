'use client'

import { UpdateAccountForm } from '@/components/date-forms/UpdateAccountForm'
import { ProfilePictureInput } from '@/components/Profile/ProfilePictureInput'
import {
  GetAccountProfileDocument,
  useGetAccountProfileSuspenseQuery,
  useUpdateAccountMutation,
} from '@/graphql/generated/apollo'
import { disableSSR } from '@/lib/server/ssr-options'
import type { UpdateAccountFormData } from '@repo/forms/account-updateAccountFormZodSchema'
import { accountDataZodSchema } from '@repo/ts-types'
import { Column } from '@repo/ui/components/common/Column'
import { useSuperEffect } from '@repo/ui/dist/hooks/useSuperEffect'
import { notFound, useRouter } from 'next/navigation'
import type { SubmitHandler } from 'react-hook-form'
import { useUpdateAccountReactHookForm } from './useUpdateAccountReactHookForm'

const EditProfilePage = disableSSR(() => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const data = useGetAccountProfileSuspenseQuery({}).data?.getAccountProfile
  const router = useRouter()

  useSuperEffect(
    () => {
      router.push('/auth/newuser')
    },
    [],
    { disable: data?.isAccountCompleted }
  )

  const accountProfileData = accountDataZodSchema.parse(data)

  const form = useUpdateAccountReactHookForm(accountProfileData)

  const [updateUserAccount] = useUpdateAccountMutation()

  //? form-Submit
  const formSubmit: SubmitHandler<UpdateAccountFormData> = async (data) => {
    await updateUserAccount({
      variables: { userProfileData: data },
      refetchQueries: [GetAccountProfileDocument],
    })
  }

  return (
    <Column className="justify-center items-center gap-4 m-4">
      <ProfilePictureInput
        onChange={() => {}}
        currentPictureSrc={accountProfileData?.profilePictureURL}
      ></ProfilePictureInput>
      <UpdateAccountForm form={form} onSubmit={formSubmit}></UpdateAccountForm>
    </Column>
  )
})

export default EditProfilePage
