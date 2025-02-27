'use client'

import { UpdateUserForm } from '@/components/forms/updateUserForm/UpdateUserForm'
import type { UserAccountFormData } from '@/components/forms/updateUserForm/userUpdateAccountForm'
import { useUpdateAccountMutation } from '@/graphql/generated/apollo'
import { type FullAccountData } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { useTranslations } from 'next-intl'
import type { SubmitHandler } from 'react-hook-form'
import { useEditUserProfileReactHookForm } from './useEditUserProfileReactHookForm'

export type ProfilePageContentProps = {
  currentAccountData: FullAccountData
}

export const ProfilePageContent = ({ currentAccountData }: ProfilePageContentProps) => {
  const t = useTranslations('pages.profile-edit')

  const [updateUserAccount, UpdatingUserAccountState] = useUpdateAccountMutation()

  const form = useEditUserProfileReactHookForm(currentAccountData)

  //? Submit
  const onSubmit: SubmitHandler<UserAccountFormData> = async (data) => {
    await updateUserAccount({ variables: { userProfileData: data } })
  }

  return (
    <Center>
      <UpdateUserForm form={form} onSubmit={onSubmit}></UpdateUserForm>
    </Center>
  )
}
