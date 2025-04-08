import { ProfileNameAndAge } from '@/components/Profile/nameAndAge/UserProfileNameAndAge'
import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import type { ReactNode } from 'react'
import { UserProfileCardBioItem } from './UserProfileCardBioItem'
import type { UserProfileCardData } from './UserProfileCardDataTypes'
import { UserProfileCardProfilePicture } from './UserProfileCardProfilePicture'
import { UserProfileCardSocialsItem } from './UserProfileCardSocialsItem'
import type { NullableObjectByKeys } from '@repo/ts-types'

type UserProfileCardProps = {
  className?: string
  children?: ReactNode
  data: NullableObjectByKeys<UserProfileCardData, 'socials'>
}

export const UserProfileCard = ({ className, children, data }: UserProfileCardProps) => {
  const { gender, profilePictureURL, bio } = data

  return (
    <Card className={cn('w-[400px] h-auto bg-white', className)}>
      <Column className=" h-auto w-full p-4 gap-6 relative">
        <UserProfileCardProfilePicture
          className="w-full h-auto"
          {...{ profilePictureURL, gender }}
        ></UserProfileCardProfilePicture>

        <ProfileNameAndAge name={data.username} age={data.age}></ProfileNameAndAge>

        {bio && <UserProfileCardBioItem bio={bio}></UserProfileCardBioItem>}

        {data.socials && (
          <UserProfileCardSocialsItem socials={data.socials}></UserProfileCardSocialsItem>
        )}
        {children}
      </Column>
    </Card>
  )
}
