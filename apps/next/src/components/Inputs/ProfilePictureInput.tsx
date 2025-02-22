'use client'

import { envClient } from '@/lib/envClient'
import { Card } from '@repo/ui/components/common/Card'
import { ImageInput } from '@repo/ui/components/common/ImageInput'
import { IconChange } from '@repo/ui/components/Icons/Icons'
import type { PothosOptional } from '@repo/ts-types'

type ProfilePictureInputProps = {
  onChange: (imageFile: File) => void
  currentPictureSrc: PothosOptional<string>
}

export const ProfilePictureInput = ({ onChange, currentPictureSrc }: ProfilePictureInputProps) => {
  return (
    <Card className="max-w-[300px] max-h-[350px] w-full rounded-t-xl rounded-b-none relative">
      <IconChange className="absolute top-0 right-0 w-12 h-12 m-2 fill-white outline-solid outline-2 outline-offset-2 rounded-full"></IconChange>
      <ImageInput
        sizes={{
          height: envClient.NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT,
          width: envClient.NEXT_PUBLIC_PROFILE_PICTURE_WIDTH,
        }}
        alt="profile-picture"
        src={currentPictureSrc}
        imageFileAcceptPattern=".jpg, .png, .jpeg"
        fallbackSrc="/userPicturePlaceholder.webp"
        className="w-full h-full"
        onChange={onChange}
      ></ImageInput>
    </Card>
  )
}
