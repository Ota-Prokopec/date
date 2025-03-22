import { Gender } from '@/components/common/Gender'
import type {
  AccountData,
  UserProfileData,
  Gender as GenderType,
  PothosOptional,
} from '@repo/ts-types'
import Image from 'next/image'

type UserProfileCardProfilePictureProps = {
  gender?: PothosOptional<GenderType>
  profilePictureURL?: PothosOptional<(AccountData | UserProfileData)['profilePictureURL']>
}

export const UserProfileCardProfilePicture = ({
  gender,
  profilePictureURL,
}: UserProfileCardProfilePictureProps) => {
  return (
    <div className="w-auto h-auto rounded-t-xl rounded-b-none  relative overflow-hidden">
      <Image
        alt="profile-picture"
        src={profilePictureURL ?? ''}
        width={350}
        height={350}
        className="w-[350px] h-[350px] rounded-xl object-cover"
      ></Image>

      <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 bg-white rounded-[100px] flex items-center justify-center [&_*]:w-14 [&_*]:h-14">
        <Gender gender={gender}></Gender>
      </div>
    </div>
  )
}
