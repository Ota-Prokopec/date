import { ProfileNameAndAge } from '@/components/Profile/nameAndAge/UserProfileNameAndAge'
import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { UserProfileMiniCardData } from './UserProfileCardDataTypes'
import { UserProfileCardProfilePicture } from './UserProfileCardProfilePicture'
import type { ReactNode } from 'react'

type UserProfileMiniCardProps = {
  className?: string
  data: UserProfileMiniCardData
  children?: ReactNode
}

export const UserProfileMiniCard = ({ className, data, children }: UserProfileMiniCardProps) => {
  const { gender, profilePictureURL } = data

  return (
    <Card className={cn('w-full h-auto max-w-[350px]', className)}>
      <Column className="h-auto w-full p-4 gap-6 relative">
        <UserProfileCardProfilePicture
          className="w-full h-auto"
          {...{ profilePictureURL, gender }}
        ></UserProfileCardProfilePicture>

        <ProfileNameAndAge name={data.username} age={data.age}></ProfileNameAndAge>
        {children}
      </Column>
    </Card>
  )
}
