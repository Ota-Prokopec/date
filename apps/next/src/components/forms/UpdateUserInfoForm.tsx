'use client'

import { BioInput } from '@/components/Inputs/BioInput'
import { EditProfileItem } from '@/components/forms/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { SocialsInput } from '@/components/Inputs/ProfileSocialsInput'
import { ProfileNameAndAge } from '@/components/Profile/ProfileNameAndAge'
import { envClient } from '@/lib/envClient'
import { Button } from '@repo/ui/components/common/Button'
import { Card } from '@repo/ui/components/common/Card'
import { Column } from '@repo/ui/components/common/Column'
import { ImageInput } from '@repo/ui/components/common/ImageInput'
import { Row } from '@repo/ui/components/common/Row'
import { IconChange } from '@repo/ui/components/Icons/Icons'
import type { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { accountDataZodSchema, NonNullableObject } from '@repo/ts-types'
import type { z } from 'zod'
import { ProfilePictureInput } from '../Inputs/ProfilePictureInput'

type AccountData = z.TypeOf<typeof accountDataZodSchema>

export type UpdateUserInfoFormData = Required<
  NonNullableObject<Pick<AccountData, 'gender' | 'lookingForGender'>>
> &
  Pick<AccountData, 'bio' | 'socials'>

type UpdateUserInfoFormProps = {
  watch: UseFormWatch<UpdateUserInfoFormData>
  setValue: UseFormSetValue<UpdateUserInfoFormData>
  className?: string
  additionalData: {
    profilePictureUrl?: AccountData['profilePictureURL']
  }
}

export const UpdateUserInfoForm = ({
  watch,
  setValue,
  className,
  additionalData,
}: UpdateUserInfoFormProps) => {
  const values = watch()

  return (
    <Column className="h-full p-4 gap-6 max-w-[600px] w-full items-center justify-start">
      <ProfilePictureInput
        currentPictureSrc={additionalData.profilePictureUrl}
        onChange={(file) => value}
      ></ProfilePictureInput>
      <ProfileNameAndAge name="Ota" age={20}></ProfileNameAndAge>

      <Column className="w-full gap-2">
        <EditProfileItem title="About me:">
          <BioInput></BioInput>
        </EditProfileItem>
        <Row className="gap-2">
          <EditProfileItem className="w-fit mobile:w-full" title="My gender">
            <GenderInput onChange={() => {}} defaultGender="male"></GenderInput>
          </EditProfileItem>
          <EditProfileItem className="w-fit mobile:w-full" title="How to connect with me">
            <SocialsInput></SocialsInput>
          </EditProfileItem>
        </Row>
      </Column>

      <Button className="bg-blue-500 text-2xl !p-8 !pl-10 !pr-10">Save changes</Button>
    </Column>
  )
}
