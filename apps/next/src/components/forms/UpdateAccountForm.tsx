'use client'

import { EditAccountProfileItem } from '@/components/forms/EditAccountProfileItem'
import { Button } from '@repo/ui/components/common/Button'
import { Column } from '@repo/ui/components/common/Column'
import { BioInputFormItem } from '@repo/ui/components/Forms/BioInputFormItem'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import { AccountProfileSocialsInputFormItem } from './AccountProfileSocialsInputFormItem'
import type { UpdateAccountFormData } from '@repo/forms/account-updateAccountFormZodSchema'

type UpdateAccountFormProps = {
  className?: string
  form: UseFormReturn<UpdateAccountFormData>
  onSubmit: SubmitHandler<UpdateAccountFormData>
}

export const UpdateAccountForm = ({ form, className, onSubmit }: UpdateAccountFormProps) => {
  const t = useTranslations('components.UpdateAccountForm')

  return (
    <ReactHookForm onSubmit={onSubmit} form={form}>
      <Column className={cn('gap-4 w-full', className)}>
        <EditAccountProfileItem className="w-full" title={t('bioInputTitle')}>
          <BioInputFormItem form={form} name="bio"></BioInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('genderInputTitle')}>
          <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('lookingForGenderInputTitle')}>
          <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>
        </EditAccountProfileItem>
        <EditAccountProfileItem title={t('genderInputTitle')}>
          <AccountProfileSocialsInputFormItem
            form={form}
            name="socials"
          ></AccountProfileSocialsInputFormItem>
        </EditAccountProfileItem>

        <Button
          isLoading={form.formState.isSubmitting}
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
