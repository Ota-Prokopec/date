'use client'

import { UpdateUserInfo } from '@/components/forms/UpdateUserInfo'
import type { UpdateUserInfoFormData } from '@/components/forms/UpdateUserInfoForm'
import { useGetAccountProfileQuery } from '@/graphql/generated/apollo'
import { useCreateAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import { accountDataZodSchema, userProfileDataZodSchema, type AccountData } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { Loading } from '@repo/ui/components/common/Loading'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { match } from 'ts-pattern'

const loadedAccountZodTypeCheckForEditing = userProfileDataZodSchema
  .pick({
    bio: true,
    gender: true,
    lookingForGender: true,
    socials: true,
    profilePictureURL: true,
  })
  .partial({
    bio: true,
    socials: true,
    profilePictureURL: true,
  })

const ProfilePage = () => {
  const t = useTranslations('pages.profile-edit')
  const accountProfileState = useGetAccountProfileQuery()

  const { data: accountProfileData, success: isAccountProfileDataValid } =
    loadedAccountZodTypeCheckForEditing.safeParse(accountProfileState.data?.getAccountProfile)

  //* If error occures during validation of profile data with zod schema
  useEffect(() => {
    if (!isAccountProfileDataValid && !accountProfileState.loading && accountProfileData)
      toast.error(t('somethingWentWrongErrorMessage'), { dismissible: true })
  }, [isAccountProfileDataValid, t, accountProfileState.loading, accountProfileData])

  //* If error occures during loading profile data
  useEffect(() => {
    if (!accountProfileState.loading && accountProfileState.error) {
      if (!accountProfileData) notFound()
      else toast.error(t('somethingWentWrongErrorMessage'), { dismissible: true })
    }
  }, [accountProfileState.error, accountProfileState.loading, accountProfileData, t])

  return (
    <Center>
      {match({ loading: accountProfileState.loading })
        .with({ loading: true }, () => <Loading></Loading>)
        .otherwise(() => (
          <UpdateUserInfo
            currentValues={{
              ...accountProfileData!,
              profilePictureUrl: accountProfileData?.profilePictureURL,
            }}
          ></UpdateUserInfo>
        ))}
    </Center>
  )
}

export default ProfilePage
