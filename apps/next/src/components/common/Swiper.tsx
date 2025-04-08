import type { NullableObjectByKeys, SwipeType, WithClassName } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { cn } from '@repo/ui/dist/lib/utils'
import { SwipingCard, useSwipingCardContext } from '@repo/ui/tsx/components/common/SwipingCard'
import { useState } from 'react'
import { match } from 'ts-pattern'
import { UserProfileCard } from '../Profile/userProfileCard/UserProfileCard'
import type { UserProfileCardData } from '../Profile/userProfileCard/UserProfileCardDataTypes'
import { LikingBar } from './LikingBar'
import { NoMoreProfiles } from './NoMoreProfiles'
import { UserProfileCardForSwiping } from '../Profile/userProfileCard/UserProfileCardForSwiping'

export type SwiperProps = WithClassName<{
  data: UserProfileCardData[]
  onSwipe: (stage: SwipeType, userProfileData: UserProfileCardData) => void
}>

export const Swiper = ({ className, data, onSwipe }: SwiperProps) => {
  const [userProfiles, setUserProfiles] = useState<UserProfileCardData[]>(data)
  const { swipe } = useSwipingCardContext()
  const currentUserProfile = userProfiles.at(0)
  const nextUserProfile = userProfiles.at(1)

  const onSwipeHandler = (type: SwipeType) => {
    if (!currentUserProfile) throw new Error('No currentUserProfile chosen')
    setUserProfiles((c) => c.slice(1, c.length))
    onSwipe(type, currentUserProfile)
  }

  return (
    <Center>
      {match({ currentUserProfile })
        .with({ currentUserProfile: undefined }, () => <NoMoreProfiles></NoMoreProfiles>)
        .otherwise(() => (
          <SwipingCard
            onSwipe={(swipeDirection) =>
              onSwipeHandler(swipeDirection === 'left' ? 'dislike' : 'like')
            }
            className={cn('z-20 animate-scale-from-75-to-100', className)}
          >
            <UserProfileCardForSwiping
              onSwipe={onSwipeHandler}
              userData={currentUserProfile!}
            ></UserProfileCardForSwiping>
          </SwipingCard>
        ))}
      {nextUserProfile && (
        <UserProfileCardForSwiping
          className="absolute scale-75 z-10"
          onSwipe={() => {}}
          userData={nextUserProfile}
        />
      )}
    </Center>
  )
}
