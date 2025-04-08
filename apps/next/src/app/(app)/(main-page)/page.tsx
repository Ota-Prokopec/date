'use client'

import { Swiper } from '@/components/common/Swiper'
import type { UserProfileCardData } from '@/components/Profile/userProfileCard/UserProfileCardDataTypes'
import {
  useGetListOfRandomUsersSuspenseQuery,
  useSwipeUserMutation,
} from '@/graphql/generated/apollo'
import type { SwipeType } from '@repo/ts-types'
import { toast } from 'sonner'

const MainPage = () => {
  const { data } = useGetListOfRandomUsersSuspenseQuery({
    variables: { limit: 4 },
    fetchPolicy: 'cache-first',
  })
  const userProfiles = data?.getListOfRandomUsers satisfies UserProfileCardData[] | undefined

  const [likeUser, likingUserState] = useSwipeUserMutation()

  const onSwipe = (type: SwipeType, { userId }: UserProfileCardData) => {
    if (type === 'dislike') return
    const likingPromise = likeUser({ variables: { likedUserId: userId } })
    toast.promise(likingPromise, { dismissible: true })
  }

  return userProfiles && <Swiper onSwipe={onSwipe} data={userProfiles}></Swiper>
}

export default MainPage
