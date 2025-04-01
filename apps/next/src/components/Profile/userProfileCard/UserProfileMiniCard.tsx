import { ProfileNameAndAge } from '@/components/Profile/nameAndAge/UserProfileNameAndAge'
import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { UserProfileMiniCardData } from './UserProfileCardDataTypes'
import { UserProfileCardProfilePicture } from './UserProfileCardProfilePicture'

type UserProfileMiniCardProps = {
  className?: string
  data: UserProfileMiniCardData
}

export const UserProfileMiniCard = ({ className, data }: UserProfileMiniCardProps) => {
  const { gender, profilePictureURL } = data

  return (
    <Card className={cn('', className)}>
      <Column className=" h-full p-4 gap-6">
        <UserProfileCardProfilePicture
          {...{ profilePictureURL, gender }}
        ></UserProfileCardProfilePicture>

        <ProfileNameAndAge name={data.username} age={data.age}></ProfileNameAndAge>
      </Column>
    </Card>
  )
}
