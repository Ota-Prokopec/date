'use client'

import type { UpdateNewAccountFormData } from '@repo/forms/account-updateNewAccountFormZodSchema'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Left } from '@repo/ui/components/common/Left'
import { Loader } from '@repo/ui/components/common/Loader'
import { LocaleSwitch } from '@repo/ui/components/common/LocaleSwitch'
import { Right } from '@repo/ui/components/common/Right'
import { DateInputFormItem } from '@repo/ui/components/Forms/DateInputFormItem'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import { GenderInputFormItem } from '@repo/ui/components/Forms/GenderInputFormItem'
import { UserNameInputFormItem } from '@repo/ui/components/Forms/UserNameInputFormItem'
import { cn } from '@repo/ui/ts-lib/lib/utils'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import { match } from 'ts-pattern'
import { NextDownButton } from '../Buttons/NextDownButton'
import { SaveButton } from '../Buttons/SaveButton'
import { FormPaginatorDown, type FormPaginatorDownItems } from '../common/FormPaginatorDown'

type UpdateNewAccountFormProps = {
  className?: string
  form: UseFormReturn<UpdateNewAccountFormData>
  isLoading?: boolean
  onSubmit: SubmitHandler<UpdateNewAccountFormData>
}

const useUpdateNewAccountFormFields = (form: UseFormReturn<UpdateNewAccountFormData>) => {
  const titles = useTranslations('components.UpdateNewAccountForm.titles')
  const descriptions = useTranslations('components.UpdateNewAccountForm.descriptions')

  return [
    {
      title: titles('usernameInputTitle'),
      description: descriptions('usernameInputTitle'),
      formField: <UserNameInputFormItem form={form} name="username"></UserNameInputFormItem>,
    },
    {
      title: titles('dateInputTitle'),
      description: descriptions('dateInputTitle'),
      formField: <DateInputFormItem form={form} name="birthDate"></DateInputFormItem>,
    },
    {
      title: titles('genderInputTitle'),
      description: descriptions('genderInputTitle'),
      formField: <GenderInputFormItem form={form} name="gender"></GenderInputFormItem>,
    },
    {
      title: titles('lookingForGenderInputTitle'),
      description: descriptions('lookingForGenderInputTitle'),
      formField: <GenderInputFormItem form={form} name="lookingForGender"></GenderInputFormItem>,
    },
  ] as const satisfies FormPaginatorDownItems
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

        <FormPaginatorDown items={formFields} index={currentFieldIndex} />

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
      </Column>
      {isLoading && (
        <Center className="absolute top-0 left-0 h-full w-full">
          <Loader></Loader>
        </Center>
      )}
    </ReactHookForm>
  )
}
