import { type FieldValues } from 'react-hook-form'
import { BioInput } from '../Inputs/BioInput'
import { ReactHookFormItem } from './ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

export type BioInputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    placeholder?: string
    required?: boolean
  }

export const BioInputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  ...props
}: BioInputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => <BioInput {...field} {...props} />}
    ></ReactHookFormItem>
  )
}
