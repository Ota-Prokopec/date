'use client'

import {
  UserProfileCard,
  UserProfileCardSkeletonLoading,
} from '@/components/Profile/UserProfileCard'
import { useGetAccountProfileQuery } from '@/graphql/generated/apollo'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { match } from 'ts-pattern'

const ProfilePage = () => {
  const t = useTranslations('pages.profile')
  const accountProfileState = useGetAccountProfileQuery()
  const accountProfileData = accountProfileState.data?.getAccountProfile

  useEffect(() => {
    if (!accountProfileState.loading && accountProfileState.error) {
      if (!accountProfileData) notFound()
      else toast.error(t('somethingWentWrongErrorMessage'), { dismissible: true })
    }
  }, [accountProfileState.error, accountProfileState.loading, accountProfileData, t])

  return (
    <Center className="w-full h-full">
      {match({ loading: accountProfileState.loading })
        .with({ loading: true }, () => (
          <UserProfileCardSkeletonLoading></UserProfileCardSkeletonLoading>
        ))
        .otherwise(
          () =>
            accountProfileData && (
              <UserProfileCard data={accountProfileData}>
                <Button>{t('editProfileButtonLabel')}</Button>
              </UserProfileCard>
            )
        )}
    </Center>
  )
}

export default ProfilePage
