import { type FieldValues, type Path } from 'react-hook-form'
import { Input } from '../Inputs/Input'
import { ReactHookFormFieldWrapper } from './ReactHookFormFieldWrapper'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

type TextInputInputFormItemValuetype = string

export type TextInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email' | 'password'
} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, TextInputInputFormItemValuetype>

export const TextInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
  type = 'text',
  ...props
}: TextInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
      form={form}
      name={name}
      render={({ field }) => <Input type={type} {...field} {...props} />}
    ></ReactHookFormFieldWrapper>
  )
}
