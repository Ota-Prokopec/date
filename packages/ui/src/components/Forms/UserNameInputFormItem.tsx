import { type FieldValues } from 'react-hook-form'
import { UsernameInput } from '../Inputs/UsernameInput'
import { ReactHookFormItem } from './ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

export type UserNameInputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    placeholder?: string
    required?: boolean
  }

export const UserNameInputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  ...props
}: UserNameInputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => <UsernameInput {...field} {...props} />}
    ></ReactHookFormItem>
  )
}
