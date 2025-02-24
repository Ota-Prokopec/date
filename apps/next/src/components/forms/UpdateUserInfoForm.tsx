'use client'

import { EditProfileItem } from '@/components/forms/EditProfileItem'
import { ProfileNameAndAge } from '@/components/Profile/ProfileNameAndAge'
import type { accountDataZodSchema, NonNullableObject } from '@repo/ts-types'
import { Button } from '@repo/ui/components/common/Button'
import { Column } from '@repo/ui/components/common/Column'
import { Row } from '@repo/ui/components/common/Row'
import type { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { z } from 'zod'
import { ProfilePictureInput } from '../Inputs/ProfilePictureInput'
import { BioInput } from '../../../../../packages/ui/src/components/Inputs/BioInput'
import { GenderInput } from '../../../../../packages/ui/src/components/Inputs/GenderInput'
import { SocialsInput } from '@/components/Inputs/ProfileSocialsInput'

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
        onChange={(file) => {}}
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
