'use client'

import { EditProfileGenderInput } from '@/components/EditProfile/EditProfileGenderInput'
import { EditProfileSocialsInput } from '@/components/EditProfile/EditProfileSocialsInput'

export default () => {
  return (
    <>
      <EditProfileGenderInput
        radioGroupName={'1'}
        onChange={(gender) => {}}
        defaultGender={'male'}
      ></EditProfileGenderInput>

      <EditProfileGenderInput
        radioGroupName="2"
        onChange={(gender) => {}}
        defaultGender="male"
      ></EditProfileGenderInput>
      <EditProfileGenderInput
        radioGroupName="3"
        onChange={(gender) => {}}
        defaultGender="male"
      ></EditProfileGenderInput>
      <EditProfileGenderInput
        radioGroupName="4"
        onChange={(gender) => {}}
        defaultGender="male"
      ></EditProfileGenderInput>
    </>
  )
}
