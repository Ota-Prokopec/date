import { Grid } from '@repo/ui/tsx/components/common/Grid'
import type { UserProfileMiniCardData } from '../Profile/userProfileCard/UserProfileCardDataTypes'
import { UserProfileMiniCard } from '../Profile/userProfileCard/UserProfileMiniCard'
import { cn } from '@repo/ui/dist/lib/utils'
import { LikingBar } from './LikingBar'

type ChooseMathProps = {
  className?: string
  userProfiles: UserProfileMiniCardData[]
}

export const LikingPeopleGrid = ({ className, userProfiles }: ChooseMathProps) => {
  return (
    <Grid grid="2x2" className="gap-4 w-full h-full mobile:flex mobile:flex-col">
      {userProfiles.map((userProfile, index) => (
        <UserProfileMiniCard
          className={cn({
            'pc:justify-self-end': index % 2 == 0,
            'pc:justify-self-start': index % 2 == 1,
            'pc:self-end': index / 2 < 1,
            'pc:self-start': index / 2 >= 1,
          })}
          key={userProfile.userId}
          data={userProfile}
        >
          <LikingBar className="absolute bottom-0 right-0 mb-[-10px] mr-[-10px] rotate-[-4deg]"></LikingBar>
        </UserProfileMiniCard>
      ))}
    </Grid>
  )
}
