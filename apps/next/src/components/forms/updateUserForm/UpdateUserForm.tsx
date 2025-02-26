'use client'

import { EditProfileItem } from '@/components/forms/EditProfileItem'
import { Button } from '@repo/ui/components/common/Button'
import { Column } from '@repo/ui/components/common/Column'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import { BioInputFormItem } from '../../../../../../packages/ui/src/components/Forms/BioInputFormItem'
import { ProfileSocialsInputFormItem } from '../ProfileSocialsInputFormItem.tsx'
import type { UserAccountFormData } from './userUpdateAccountForm.ts'

type UserFormProps = {
  className?: string
  form: UseFormReturn<UserAccountFormData>
  onSubmit: SubmitHandler<UserAccountFormData>
}

export const UpdateUserForm = ({ form, className, onSubmit }: UserFormProps) => {
  const t = useTranslations('components.UserForm')

  return (
    <ReactHookForm onSubmit={onSubmit} form={form}>
      <Column className={cn('gap-4 w-full', className)}>
        <EditProfileItem className="w-full" title={t('usernameInputTitle')}>
          <BioInputFormItem form={form} name="bio"></BioInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('dateInputTitle')}>
          <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('dateInputTitle')}>
          <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>
        </EditProfileItem>
        <EditProfileItem title={t('genderInputTitle')}>
          <ProfileSocialsInputFormItem form={form} name="socials"></ProfileSocialsInputFormItem>
        </EditProfileItem>

        <Button
          className="gap-2 w-[250px] h-auto"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          {t('continueButtonLabel')}
        </Button>
      </Column>
    </ReactHookForm>
  )
}
