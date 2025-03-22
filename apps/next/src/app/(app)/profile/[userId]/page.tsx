'use client'

import {
  UserProfileCard,
  UserProfileCardSkeletonLoading,
} from '@/components/Profile/userProfileCard/UserProfileCard'
import { useGetUserProfileQuery } from '@/graphql/generated/apollo'
import { Center } from '@repo/ui/components/common/Center'
import type { InferGetServerSidePropsType } from 'next'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import { use, useEffect } from 'react'
import { toast } from 'sonner'
import { match } from 'ts-pattern'
import type { userPageServerSideLoader } from './userPageServerSideLoader'
import { z } from 'zod'

const userPageParamsZodSchema = z.object({
  userId: z.string(),
})
type UserPageParams = z.TypeOf<typeof userPageParamsZodSchema>
type UserPageProps = { params: Promise<UserPageParams> }

const UserPage = ({ params }: UserPageProps) => {
  const { userId } = userPageParamsZodSchema.parse(use(params))

  const t = useTranslations('pages.profile-userpage')

  const userProfileState = useGetUserProfileQuery({ variables: { userId: userId } })
  const userProfileData = userProfileState.data?.getUserProfile

  useEffect(() => {
    if (!userProfileState.loading && userProfileState.error) {
      if (!userProfileData) notFound()
      else toast.error(t('somethingWentWrongErrorMessage'), { dismissible: true })
    }
  }, [userProfileState.error, userProfileState.loading, userProfileData, t])

  return (
    <Center className="w-full h-full">
      {match({ loading: userProfileState.loading })
        .with({ loading: true }, () => (
          <UserProfileCardSkeletonLoading></UserProfileCardSkeletonLoading>
        ))
        .otherwise(
          () => userProfileData && <UserProfileCard data={userProfileData}></UserProfileCard>
        )}
    </Center>
  )
}

export default UserPage
