'use client'

import type { UpdateNewAccountFormData } from '@repo/forms/account-updateNewAccountFormZodSchema'
import { Center } from '@repo/ui/components/common/Center'
import { Loader } from '@repo/ui/components/common/Loader'
import { Right } from '@repo/ui/components/common/Right'
import { DateInputFormItem } from '@repo/ui/components/Forms/DateInputFormItem'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { UserNameInputFormItem } from '@repo/ui/components/Forms/UserNameInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import { match } from 'ts-pattern'
import { NextDownButton } from '../Buttons/NextDownButton'
import { SaveButton } from '../Buttons/SaveButton'
import { FormPaginatorDown } from '../forms/FormPaginatorDown'
import type { FormItems, FormItemsTypeSafe } from '../forms/FormTypes'

type UpdateNewAccountFormProps = {
  className?: string
  form: UseFormReturn<UpdateNewAccountFormData>
  isLoading?: boolean
  onSubmit: SubmitHandler<UpdateNewAccountFormData>
}

const useUpdateNewAccountFormFields = (form: UseFormReturn<UpdateNewAccountFormData>) => {
  const titles = useTranslations('components.UpdateNewAccountForm.titles')
  const descriptions = useTranslations('components.UpdateNewAccountForm.descriptions')

  const formItems = [
    {
      title: titles('usernameInputTitle'),
      description: descriptions('usernameInputTitle'),
      formField: <UserNameInputFormItem form={form} name="username"></UserNameInputFormItem>,
      key: 'username-input-form-item',
    },
    {
      title: titles('dateInputTitle'),
      description: descriptions('dateInputTitle'),
      formField: <DateInputFormItem form={form} name="birthDate"></DateInputFormItem>,
      key: 'date-input-form-item',
    },
    {
      title: titles('genderInputTitle'),
      description: descriptions('genderInputTitle'),
      formField: <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>,
      key: 'gender-input-form-item',
    },
    {
      title: titles('lookingForGenderInputTitle'),
      description: descriptions('lookingForGenderInputTitle'),
      formField: <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>,
      key: 'looking-for-gender-input-form-item',
    },
  ] as const satisfies FormItems

  return formItems
}

export const UpdateNewAccountForm = ({
  form,
  className,
  isLoading,
  onSubmit,
}: UpdateNewAccountFormProps) => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState<number>(1)
  const formFields = useUpdateNewAccountFormFields(form)
  const t = useTranslations('components.UpdateNewAccountForm')

  return (
    <>
      <FormPaginatorDown
        form={form}
        onSubmit={onSubmit}
        className={cn(
          {
            'opacity-25': isLoading,
          },
          className
        )}
        items={formFields}
        index={currentFieldIndex}
      >
        <Right>
          {match({
            isItAll: currentFieldIndex === formFields.length,
          })
            .with({ isItAll: true }, () => <SaveButton label={t('saveButtonLabel')} />)
            .otherwise(() => (
              <NextDownButton
                label={t('nextButtonLabel')}
                onNext={() => setCurrentFieldIndex((c) => c + 1)}
              />
            ))}
        </Right>
      </FormPaginatorDown>
      {isLoading && (
        <Center className="absolute top-0 left-0 h-full w-full">
          <Loader></Loader>
        </Center>
      )}
    </>
  )
}
