'use client'

import { DateInput } from '@/components/Inputs/DateInput'
import { EditProfileItem } from '@/components/Inputs/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { UsernameInput } from '@/components/Inputs/UsernameInput'
import type { useAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import type { accountZodSchema } from '@repo/ts-types'
import { Column } from '@repo/ui/components/common/Column'
import { Left } from '@repo/ui/components/common/Left'
import { LocaleSwitch } from '@repo/ui/components/common/LocaleSwitch'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { useTranslations } from 'next-intl'
import { type UseFormSetValue, type UseFormWatch } from 'react-hook-form'
import type { z } from 'zod'

export type FormData = Pick<
  z.TypeOf<typeof accountZodSchema>,
  'username' | 'gender' | 'lookingForGender' | 'birthDate'
>

type NewUserFormProps = {
  watch: UseFormWatch<FormData>
  setValue: UseFormSetValue<FormData>
  className?: string
}

export const NewUserForm = ({ watch, setValue, className }: NewUserFormProps) => {
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
