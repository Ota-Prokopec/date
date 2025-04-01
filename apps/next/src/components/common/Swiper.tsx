import type { SwipeType, WithClassName } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { cn } from '@repo/ui/dist/lib/utils'
import {
  SwipeDirection,
  SwipingCard,
  useSwipingCardContext,
} from '@repo/ui/tsx/components/common/SwipingCard'
import { useState } from 'react'
import { match } from 'ts-pattern'
import { UserProfileCard } from '../Profile/userProfileCard/UserProfileCard'
import type { UserProfileCardData } from '../Profile/userProfileCard/UserProfileCardDataTypes'
import { LikingBar } from './LikingBar'
import { NoMoreProfiles } from './NoMoreProfiles'

export type SwiperProps = WithClassName<{
  data: UserProfileCardData[]
  onSwipe: (stage: SwipeType) => void
}>

export const Swiper = ({ className, data, onSwipe }: SwiperProps) => {
  const [userProfiles, setUserProfiles] = useState<UserProfileCardData[]>(data)
  const { swipe } = useSwipingCardContext()
  const currentUserProfile = userProfiles.at(0)
  const nextUserProfile = userProfiles.at(1)

  const onSwipeHandler = (direction: SwipeDirection) => {
    setUserProfiles((c) => c.slice(1, c.length))
    onSwipe(direction === 'left' ? 'dislike' : 'like')
  }
  return (
    <Center>
      {match({ currentUserProfile })
        .with({ currentUserProfile: undefined }, () => <NoMoreProfiles></NoMoreProfiles>)
        .otherwise(() => (
          <SwipingCard
            onSwipe={onSwipeHandler}
            className={cn('z-20 animate-scale-from-75-to-100', className)}
          >
            <UserProfileCard className="" data={currentUserProfile!}>
              <LikingBar className="absolute bottom-0 right-0 mb-[-10px] mr-[-10px] rotate-[-4deg]"></LikingBar>
            </UserProfileCard>
          </SwipingCard>
        ))}
      {nextUserProfile && (
        <UserProfileCard className="absolute scale-75 z-10" data={nextUserProfile}>
          <LikingBar className="absolute bottom-0 right-0 mb-[-10px] mr-[-10px] rotate-[-4deg]"></LikingBar>
        </UserProfileCard>
      )}
    </Center>
  )
}
