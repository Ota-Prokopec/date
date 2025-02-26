'use client'

import { getAccountDataAction } from '@/app/actions/getAccountData'
import { UpdateUserForm } from '@/components/forms/updateUserForm/UpdateUserForm'
import type { UserAccountFormData } from '@/components/forms/updateUserForm/userUpdateAccountForm'
import { useUpdateAccountMutation } from '@/graphql/generated/apollo'
import { accountDataZodSchemaAllPropsRequired, type AccountData } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useEditUserProfileReactHookForm } from './useEditUserProfileReactHookForm'

const loadedAccountZodTypeCheckForEditing = accountDataZodSchemaAllPropsRequired
  .pick({
    bio: true,
    gender: true,
    lookingForGender: true,
    socials: true,
    profilePictureURL: true,
    username: true,
    birthDate: true,
  })
  .partial({
    bio: true,
    socials: true,
    profilePictureURL: true,
  })

const ProfilePage = () => {
  const t = useTranslations('pages.profile-edit')

  //? loading - loading.tsx, error - error.tsx
  const currentAccountDataForValidation: AccountData = use(getAccountDataAction())
  const router = useRouter()

  const [updateUserAccount, UpdatingUserAccountState] = useUpdateAccountMutation()

  const { data: accountProfileData, success: isAccountProfileDataValid } =
    loadedAccountZodTypeCheckForEditing.safeParse(currentAccountDataForValidation)

  //? If error occures during validation of profile data with zod schema
  useEffect(() => {
    if (!isAccountProfileDataValid) router.replace('/auth/newuser')
  }, [isAccountProfileDataValid])

  const form = useEditUserProfileReactHookForm(accountProfileData)

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

export default ProfilePage
