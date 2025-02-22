import { type FieldValues } from 'react-hook-form'
import { DateInput } from '../Inputs/DateInput'
import { ReactHookFormItem } from './ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

export type DateInputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    placeholder?: string
    required?: boolean
  }

export const DateInputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  ...props
}: DateInputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => <DateInput {...field} {...props} />}
    ></ReactHookFormItem>
  )
}
