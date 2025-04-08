import { LikingBar } from '@/components/common/LikingBar'
import { UserProfileCard } from './UserProfileCard'
import type { SwipeType } from '@repo/ts-types'
import type { UserProfileCardData } from './UserProfileCardDataTypes'

type UserProfileCardForSwipingProps = {
  onSwipe: (swipeType: SwipeType) => void
  userData: UserProfileCardData
  className?: string
}

export const UserProfileCardForSwiping = ({
  onSwipe,
  userData,
  className,
}: UserProfileCardForSwipingProps) => {
  return (
    <UserProfileCard className={className} data={userData}>
      <LikingBar
        onClick={onSwipe}
        className="absolute bottom-0 right-0 mb-[-10px] mr-[-10px] rotate-[-4deg]"
      ></LikingBar>
    </UserProfileCard>
  )
}
