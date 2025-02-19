'use client'

import {
  UserProfileCard,
  UserProfileCardSkeletonLoading,
} from '@/components/Profile/UserProfileCard'
import { useGetUserProfileQuery } from '@/graphql/generated/apollo'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { match } from 'ts-pattern'

const ProfilePage = () => {
  const userState = useGetUserProfileQuery({ variables: { userId: undefined } })

  return (
    <Center className="w-full h-full">
      {match({ loading: userState.loading })
        .with({ loading: true }, () => (
          <UserProfileCardSkeletonLoading></UserProfileCardSkeletonLoading>
        ))
        .otherwise(() => (
          <UserProfileCard data={userState.data?.getUserProfile}>
            <Button>Edit profile</Button>
          </UserProfileCard>
        ))}
    </Center>
  )
}

export default ProfilePage
