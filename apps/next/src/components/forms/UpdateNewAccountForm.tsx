'use client'

import { EditAccountProfileItem } from '@/components/forms/EditAccountProfileItem'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Left } from '@repo/ui/components/common/Left'
import { Loader } from '@repo/ui/components/common/Loader'
import { LocaleSwitch } from '@repo/ui/components/common/LocaleSwitch'
import { DateInputFormItem } from '@repo/ui/components/Forms/DateInputFormItem'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { UserNameInputFormItem } from '@repo/ui/components/Forms/UserNameInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import type { UpdateNewAccountFormData } from '@repo/forms/account-updateNewAccountFormZodSchema'

type UpdateNewAccountFormProps = {
  className?: string
  form: UseFormReturn<UpdateNewAccountFormData>
  isLoading?: boolean
  onSubmit: SubmitHandler<UpdateNewAccountFormData>
}

export const UpdateNewAccountForm = ({
  form,
  className,
  isLoading,
  onSubmit,
}: UpdateNewAccountFormProps) => {
  const t = useTranslations('components.UpdateNewAccountForm')

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
        <EditAccountProfileItem className="w-full" title={t('usernameInputTitle')}>
          <UserNameInputFormItem form={form} name="username"></UserNameInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('dateInputTitle')}>
          <DateInputFormItem form={form} name="birthDate"></DateInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('genderInputTitle')}>
          <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('lookingForGenderInputTitle')}>
          <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>
        </EditAccountProfileItem>
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
