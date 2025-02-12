'use client'

import { Center } from '@repo/ui/components/common/Center'
import { Input, DatePicker, DateValue } from '@heroui/react'
import { UserRoundPen } from '@/components/Icons'
import { Column } from '@repo/ui/components/common/Column'
import {
  useForm,
  type Control,
  type SubmitHandler,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form'
import type { Account } from '@repo/ts-types'
import { envClient } from '@/lib/envClient'
import { EditProfileGenderInput } from '@/components/EditProfile/EditProfileGenderInput'
import { useEffect } from 'react'

type FormData = Pick<Account, 'username' | 'gender' | 'lookingForGender'> & { birthDate: DateValue }

const NewUserPage = () => {
  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<FormData>({ defaultValues: { gender: 'male', lookingForGender: 'female' } })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center>
        <Forms getValues={getValues} setValue={setValue} register={register}></Forms>
      </Center>

      <input type="submit" />
    </form>
  )
}

type FormsProps = {
  register: UseFormRegister<FormData>
  getValues: UseFormGetValues<FormData>
  setValue: UseFormSetValue<FormData>
}

const Forms = ({ register, getValues, setValue }: FormsProps) => {
  const values = getValues()
  return (
    <Column className="gap-4">
      <Input
        {...register('username', {
          required: true,
          min: envClient.NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME,
          max: envClient.NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME,
        })}
        className="outline-none !border-0"
        style={{ border: '0 !important' }}
        startContent={<UserRoundPen></UserRoundPen>}
        type="text"
        placeholder="ID"
      />
      <DatePicker
        onChange={(dateValue) => {
          if (!dateValue) return
          setValue('birthDate', dateValue)
        }}
        value={values.birthDate}
        className="max-w-[284px]"
        label="Date (controlled)"
      />
      <EditProfileGenderInput
        radioGroupName={'genderRadioInput'}
        onChange={(gender) => {}}
        defaultGender={'male'}
      ></EditProfileGenderInput>

      <EditProfileGenderInput
        radioGroupName="lookingForGenderRadioInput"
        onChange={(gender) => {}}
        defaultGender="male"
      ></EditProfileGenderInput>
    </Column>
  )
}

export default NewUserPage
