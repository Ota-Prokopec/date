import { Gender } from '@/components/common/Gender'
import { IconBorder } from '@/components/common/IconBorder'
import type {
  AccountData,
  UserProfileData,
  Gender as GenderType,
  PothosOptional,
} from '@repo/ts-types'
import { cn } from '@repo/ui/dist/lib/utils'
import Image from 'next/image'

type UserProfileCardProfilePictureProps = {
  gender?: PothosOptional<GenderType>
  profilePictureURL?: PothosOptional<(AccountData | UserProfileData)['profilePictureURL']>
  className?: string
}

export const UserProfileCardProfilePicture = ({
  gender,
  className,
  profilePictureURL,
}: UserProfileCardProfilePictureProps) => {
  return (
    <div
      className={cn(
        'w-full h-full rounded-t-xl rounded-b-none  relative overflow-hidden !aspect-square',
        className
      )}
    >
      <Image
        alt="profile-picture"
        src={profilePictureURL ?? ''}
        width={350}
        height={350}
        className="w-full h-full rounded-xl object-cover"
      ></Image>

      <IconBorder className="absolute bottom-[-10px] left-[-10px] p-3">
        <Gender className="w-14 h-14" gender={gender}></Gender>
      </IconBorder>
    </div>
  )
}
