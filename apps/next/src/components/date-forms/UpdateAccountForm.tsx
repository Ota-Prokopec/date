'use client'

import { EditAccountProfileItem } from '@/components/date-forms/EditAccountProfileItem'
import type { UpdateAccountFormData } from '@repo/forms/account-updateAccountFormZodSchema'
import { Button } from '@repo/ui/components/common/Button'
import { Column } from '@repo/ui/components/common/Column'
import { BioInputFormItem } from '@repo/ui/components/Forms/BioInputFormItem'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type UseFormReturn } from 'react-hook-form'
import { Form } from '../forms/Form'
import type { FormItems, FormWrapperProperties } from '../forms/FormTypes'
import { AccountProfileSocialsInputFormItem } from './AccountProfileSocialsInputFormItem'

type UpdateAccountFormProps = {
  className?: string
} & FormWrapperProperties<UpdateAccountFormData>

const useUpdateAccountFormFields = (form: UseFormReturn<UpdateAccountFormData>) => {
  const t = useTranslations('components.UpdateAccountForm')

  return [
    {
      formField: <BioInputFormItem form={form} name="bio"></BioInputFormItem>,
      title: t('bioInputTitle'),
      key: 'bio-input-form-item',
    },
    {
      formField: <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>,
      title: t('genderInputTitle'),
      key: 'gender-form-input',
    },
    {
      formField: <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>,
      title: t('lookingForGenderInputTitle'),
      key: 'looking-for-gender-form-input',
    },
    {
      formField: (
        <AccountProfileSocialsInputFormItem
          form={form}
          name="socials"
        ></AccountProfileSocialsInputFormItem>
      ),
      title: t('socialsInputTitle'),
      key: 'socials-form-input',
    },
  ] as const satisfies FormItems
}

export const UpdateAccountForm = ({ form, className, onSubmit }: UpdateAccountFormProps) => {
  const t = useTranslations('components.UpdateAccountForm')
  const formFields = useUpdateAccountFormFields(form)

  return (
    <Column className={cn('gap-4', className)}>
      <Form
        items={formFields}
        onSubmit={onSubmit}
        form={form}
        formField={({ formField, title }) => {
          return <EditAccountProfileItem title={title}>{formField}</EditAccountProfileItem>
        }}
      >
        <Button
          isLoading={form.formState.isSubmitting}
          className="gap-2 w-[250px] h-auto"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          {t('saveButtonLabel')}
        </Button>
      </Form>
    </Column>
  )
}
