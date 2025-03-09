import { useForm, type FieldValues, type Path } from 'react-hook-form'
import { BioInput } from '../Inputs/BioInput'
import { ReactHookFormFieldWrapper } from './ReactHookFormFieldWrapper'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

type BioInputFormItemValuetype = string

export type BioInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  placeholder?: string
  required?: boolean
} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, BioInputFormItemValuetype>

export const BioInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
  ...props
}: BioInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
      form={form}
      name={name}
      render={({ field }) => <BioInput {...field} {...props} />}
    ></ReactHookFormFieldWrapper>
  )
}
