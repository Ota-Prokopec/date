'use client'

import { BasicButton } from '@/components/Inputs/BasicButton'
import { DateInput } from '@/components/Inputs/DateInput'
import { EditProfileItem } from '@/components/Inputs/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { UsernameInput } from '@/components/Inputs/UsernameInput'
import { useAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import { zodResolver } from '@hookform/resolvers/zod'
import { cookieStorage } from '@repo/cookies'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Left } from '@repo/ui/components/common/Left'
import { LocaleSwitch } from '@repo/ui/components/common/LocaleSwitch'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { getObjectKeys } from '@repo/utils/common/object'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import {
  useForm,
  type SubmitHandler,
  type UseFormSetValue,
  type UseFormWatch,
} from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type FormData = Pick<
  z.TypeOf<ReturnType<typeof useAccountZodSchemaWithErrorMessages>>,
  'username' | 'gender' | 'lookingForGender' | 'birthDate'
>

const NewUserPage = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale')
  const t = useTranslations('pages.auth-newuser')
  const formDataZodSchema = useAccountZodSchemaWithErrorMessages().pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  })

  // Forms
  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<FormData>({
      defaultValues: { gender: 'male', lookingForGender: 'female', birthDate: new Date() },
      reValidateMode: 'onSubmit',
      resolver: zodResolver(formDataZodSchema),
    })
  const {} = use

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  // errors toast
  useEffect(() => {
    const itemsTypeErrorKeys = getObjectKeys(formState.errors)
    itemsTypeErrorKeys.map((key) => {
      const message = formState.errors[key]?.message
      toast.error(message === 'Required' ? t('fillAllRequiredFields') : message)
    })
  }, [formState.errors])

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Center className="w-full p-4 flex-col gap-10">
        <Forms className="max-w-[400px]" watch={watch} setValue={setValue}></Forms>

        <BasicButton
          className="gap-2"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          {t('continueButtonLabel')}
        </BasicButton>
      </Center>
    </form>
  )
}

type FormsProps = {
  watch: UseFormWatch<FormData>
  setValue: UseFormSetValue<FormData>
  className?: string
}

const Forms = ({ watch, setValue, className }: FormsProps) => {
  const t = useTranslations('pages.auth-newuser')
  const values = watch()
  return (
    <Column className={cn('gap-4 w-full', className)}>
      <Left>
        <LocaleSwitch />
      </Left>
      <EditProfileItem className="w-full" title={t('usernameInputTitle')}>
        <UsernameInput
          value={values.username}
          onChange={(value) => setValue('username', value)}
        ></UsernameInput>
      </EditProfileItem>
      <EditProfileItem title={t('dateInputTitle')}>
        <DateInput
          value={values.birthDate}
          onChange={(date) => setValue('birthDate', date)}
        ></DateInput>
      </EditProfileItem>
      <EditProfileItem title={t('genderInputTitle')}>
        <GenderInput
          onChange={(gender) => setValue('gender', gender)}
          defaultGender={values.gender}
        ></GenderInput>
      </EditProfileItem>

      <EditProfileItem title={t('lookingForGenderInputTitle')}>
        <GenderInput
          onChange={(gender) => setValue('lookingForGender', gender)}
          defaultGender={values.lookingForGender}
        ></GenderInput>
      </EditProfileItem>
    </Column>
  )
}

export default NewUserPage
