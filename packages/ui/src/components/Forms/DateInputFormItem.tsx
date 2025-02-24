import { type FieldValues, type Path } from 'react-hook-form'
import { DateInput } from '../Inputs/DateInput'
import { ReactHookFormFieldWrapper } from './ReactHookFormFieldWrapper'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

type DateInputFormItemValuetype = Date

export type DateInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  placeholder?: string
  required?: boolean
} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, DateInputFormItemValuetype>

export const DateInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
  ...props
}: DateInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
      form={form}
      name={name}
      render={({ field }) => <DateInput {...field} {...props} />}
    ></ReactHookFormFieldWrapper>
  )
}
