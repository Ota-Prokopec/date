import { type FieldValues } from 'react-hook-form'
import { ReactHookFormItem } from './ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'
import { Input } from '../Inputs/Input'

export type InputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    required?: boolean
  }

export const InputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  type = 'text',
  ...props
}: InputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => <Input type={type} {...field} {...props} />}
    ></ReactHookFormItem>
  )
}
