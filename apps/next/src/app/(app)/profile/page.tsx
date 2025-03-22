'use client'

import { UserProfileCard } from '@/components/Profile/userProfileCard/UserProfileCard'
import { useGetAccountProfileSuspenseQuery } from '@/graphql/generated/apollo'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { useTranslations } from 'next-intl'
import { notFound, useRouter } from 'next/navigation'

const ProfilePage = () => {
  const t = useTranslations('pages.profile')
  const router = useRouter()
  const accountProfileState = useGetAccountProfileSuspenseQuery()
  const accountProfileData = accountProfileState.data?.getAccountProfile

  if (!accountProfileData) notFound()

  return (
    <Center className="w-auto h-full flex flex-wrap flex-col gap-4">
      <UserProfileCard data={accountProfileData}></UserProfileCard>
      <Button onClick={() => router.push('/profile/edit')} className="w-full">
        {t('editProfileButtonLabel')}
      </Button>
    </Center>
  )
}

export default ProfilePage
