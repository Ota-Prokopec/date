import type { HasDuplicatedProperties } from '@repo/ts-types'
import type { ReactNode } from 'react'
import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

export type FormItem = {
  title: string
  description?: string
  formField: ReactNode
  key: string
}

export type FormItems = FormItem[]

export type FormItemsTypeSafe<TFormItems extends FormItems> =
  HasDuplicatedProperties<TFormItems, 'key'> extends true ? never : TFormItems

export type FormWrapperProperties<FormFields extends FieldValues> = {
  form: UseFormReturn<FormFields>
  onSubmit: SubmitHandler<FormFields>
}
