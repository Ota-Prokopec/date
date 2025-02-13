'use client'

import { BasicButton } from '@/components/Inputs/BasicButton'
import { DateInput } from '@/components/Inputs/DateInput'
import { EditProfileItem } from '@/components/Inputs/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { UsernameInput } from '@/components/Inputs/UsernameInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { genderZodSchema, type Account } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import {
  useForm,
  type SubmitHandler,
  type UseFormGetValues,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form'
import { z } from 'zod'

const formDataZodSchema = z.object({
  username: z.string(),
  gender: genderZodSchema,
  lookingForGender: genderZodSchema,
  birthDate: z.date(),
})

type FormData = Pick<Account, 'username' | 'gender' | 'lookingForGender' | 'birthDate'>

const NewUserPage = () => {
  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<FormData>({
      defaultValues: { gender: 'male', lookingForGender: 'female', birthDate: new Date() },
      reValidateMode: 'onSubmit',
      resolver: zodResolver(formDataZodSchema),
    })

  useEffect(() => {
    console.log(formState.errors)
  }, [formState])

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Center className="w-full p-4 flex-col gap-10">
        <Forms
          className="max-w-[400px]"
          getValues={getValues}
          setValue={setValue}
          register={register}
        ></Forms>

        <BasicButton
          className="gap-2"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          Continue
        </BasicButton>
      </Center>
    </form>
  )
}

type FormsProps = {
  register: UseFormRegister<FormData>
  getValues: UseFormGetValues<FormData>
  setValue: UseFormSetValue<FormData>
  className?: string
}

const Forms = ({ register, getValues, setValue, className }: FormsProps) => {
  const values = getValues()
  return (
    <Column className={cn('gap-4 w-full', className)}>
      <EditProfileItem className="w-full" title="I am looking for:">
        <UsernameInput
          value={values.username}
          onChange={(value) => setValue('username', value)}
        ></UsernameInput>
      </EditProfileItem>
      <EditProfileItem title="I am looking for:">
        <DateInput
          value={values.birthDate}
          onChange={(date) => setValue('birthDate', date)}
        ></DateInput>
      </EditProfileItem>
      <EditProfileItem title="My gender:">
        <GenderInput onChange={(gender) => {}} defaultGender={'male'}></GenderInput>
      </EditProfileItem>

      <EditProfileItem title="I am looking for:">
        <GenderInput onChange={(gender) => {}} defaultGender="male"></GenderInput>
      </EditProfileItem>
    </Column>
  )
}

export default NewUserPage
