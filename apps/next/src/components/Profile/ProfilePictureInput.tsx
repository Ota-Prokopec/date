'use client'

import { useUpdateAccountProfilePictureMutation } from '@/graphql/generated/apollo'
import { messages } from '@/lib/messages'
import type { AccountData } from '@repo/ts-types'
import { Card } from '@repo/ui/components/common/Card'
import { ImageInput } from '@repo/ui/tsx/components/common/ImageInput'
import { useTranslations } from 'next-intl'
import { use, useEffect } from 'react'
import { toast } from 'sonner'

type ProfilePictureInputProps = {
  onChange: (imageFile: File) => void
  currentPictureSrc: AccountData['profilePictureURL']
}

export const ProfilePictureInput = ({ onChange, currentPictureSrc }: ProfilePictureInputProps) => {
  const t = useTranslations('components.ProfilePictureInput')

  const [updateProfilePicture, { error, loading: isLoading }] =
    useUpdateAccountProfilePictureMutation()

  const updatePicture = (pictureFile: File) => {
    const promise = updateProfilePicture({ variables: { pictureFile: pictureFile } })
    toast.promise(promise, { dismissible: true, loading: 'loading...', error: 'ejhle' })
  }

  return (
    <Card className="w-[300px] h-[300px] rounded-xl relative">
      <ImageInput
        src={currentPictureSrc}
        imageFileType={['jpeg', 'png', 'jpg']}
        fallbackSrc="/userPicturePlaceholder.webp"
        className="!w-full !h-full"
        onChange={updatePicture}
      ></ImageInput>
    </Card>
  )
}
