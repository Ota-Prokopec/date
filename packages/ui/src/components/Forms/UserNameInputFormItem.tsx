import { useForm, type FieldValues, type Path, type UseFormReturn } from 'react-hook-form'
import { UsernameInput } from '../Inputs/UsernameInput'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'
import { ReactHookFormFieldWrapper } from './ReactHookFormFieldWrapper'

type UserNameInputFormItemValuetype = string

export type UserNameInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  placeholder?: string
  required?: boolean
} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, UserNameInputFormItemValuetype>

export const UserNameInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues> = Path<TFieldValues>,
>({
  form,
  name,
  ...props
}: UserNameInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
      form={form}
      name={name}
      render={({ field }) => <UsernameInput {...field} {...props} />}
    ></ReactHookFormFieldWrapper>
  )
}
