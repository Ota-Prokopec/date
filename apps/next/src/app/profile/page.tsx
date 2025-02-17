'use client'

import { UserProfileCard } from '@/components/Profile/UserProfileCard'
import { useGetUserProfileQuery } from '@/graphql/generated/apollo'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'

const ProfilePage = () => {
  const userState = useGetUserProfileQuery({ variables: { userId: undefined } })

  return (
    <Center className="w-full h-full">
      <UserProfileCard data={userState.data}>
        <Button>Edit profile</Button>
      </UserProfileCard>
    </Center>
  )
}

export default ProfilePage
