'use client'

import { BasicButton } from '@/components/Inputs/BasicButton'
import { DateInput } from '@/components/Inputs/DateInput'
import { EditProfileItem } from '@/components/Inputs/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { UsernameInput } from '@/components/Inputs/UsernameInput'
import { getAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import { zodResolver } from '@hookform/resolvers/zod'
import { cookieStorage } from '@repo/cookies'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import {
  useForm,
  type SubmitHandler,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormWatch,
} from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { getObjectKeys } from '@repo/utils/common/object'

type FormData = Pick<
  z.TypeOf<ReturnType<typeof getAccountZodSchemaWithErrorMessages>>,
  'username' | 'gender' | 'lookingForGender' | 'birthDate'
>

const NewUserPage = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale')

  const formDataZodSchema = getAccountZodSchemaWithErrorMessages(locale).pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  })

  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<FormData>({
      defaultValues: { gender: 'male', lookingForGender: 'female', birthDate: new Date() },
      reValidateMode: 'onSubmit',
      resolver: zodResolver(formDataZodSchema),
    })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  // errors toast
  useEffect(() => {
    const itemsTypeErrorKeys = getObjectKeys(formState.errors)
    itemsTypeErrorKeys.map((key) => {
      const message = formState.errors[key]?.message
      toast.error(message === 'Required' ? 'Please fill the required fields' : message)
    })
  }, [formState.errors])

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Center className="w-full p-4 flex-col gap-10">
        <Forms
          className="max-w-[400px]"
          watch={watch}
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
  watch: UseFormWatch<FormData>
  setValue: UseFormSetValue<FormData>
  className?: string
}

const Forms = ({ register, watch, setValue, className }: FormsProps) => {
  const values = watch()
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
