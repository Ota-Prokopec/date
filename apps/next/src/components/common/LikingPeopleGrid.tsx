import { Grid } from '@repo/ui/tsx/components/common/Grid'
import type { UserProfileMiniCardData } from '../Profile/userProfileCard/UserProfileCardDataTypes'
import { UserProfileMiniCard } from '../Profile/userProfileCard/UserProfileMiniCard'

type ChooseMathProps = {
  className?: string
  userProfiles: UserProfileMiniCardData[]
}

export const LikingPeopleGrid = ({ className, userProfiles }: ChooseMathProps) => {
  return (
    <Grid grid="2x2">
      {userProfiles.map((userProfile) => (
        <UserProfileMiniCard key={userProfile.userId} data={userProfile}></UserProfileMiniCard>
      ))}
    </Grid>
  )
}
