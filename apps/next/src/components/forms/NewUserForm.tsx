'use client'

import { EditProfileItem } from '@/components/forms/EditProfileItem'
import type { NewUserFormData } from '@/lib/account/newuserUpdateAccountTypes'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Left } from '@repo/ui/components/common/Left'
import { Loading } from '@repo/ui/components/common/Loading'
import { LocaleSwitch } from '@repo/ui/components/common/LocaleSwitch'
import { DateInputFormItem } from '@repo/ui/components/Forms/DateInputFormItem'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { UserNameInputFormItem } from '@repo/ui/components/Forms/UserNameInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import { toast } from 'sonner'
import { Loader } from '@repo/ui/components/common/Loader'

type NewUserFormProps = {
  className?: string
  form: UseFormReturn<NewUserFormData>
  isLoading?: boolean
  onSubmit: SubmitHandler<NewUserFormData>
}

export const NewUserForm = ({ form, className, isLoading, onSubmit }: NewUserFormProps) => {
  const t = useTranslations('components.NewUserForm')

  return (
    <ReactHookForm onSubmit={onSubmit} form={form}>
      <Column
        className={cn(
          'gap-4 w-full',
          {
            'opacity-25': isLoading,
          },
          className
        )}
      >
        <Left>
          <LocaleSwitch />
        </Left>
        <EditProfileItem className="w-full" title={t('usernameInputTitle')}>
          <UserNameInputFormItem form={form} name="username"></UserNameInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('dateInputTitle')}>
          <DateInputFormItem form={form} name="birthDate"></DateInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('genderInputTitle')}>
          <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('lookingForGenderInputTitle')}>
          <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>
        </EditProfileItem>
        <Button
          className="gap-2 w-[250px] h-auto"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          {t('continueButtonLabel')}
        </Button>
      </Column>
      {isLoading && (
        <Center className="absolute top-0 left-0 h-full w-full">
          <Loader></Loader>
        </Center>
      )}
    </ReactHookForm>
  )
}
