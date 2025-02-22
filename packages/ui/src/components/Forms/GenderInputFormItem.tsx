import { type FieldValues } from 'react-hook-form'
import { GenderInput } from '../Inputs/GenderInput'
import { ReactHookFormItem } from './ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

export type GenderInputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    placeholder?: string
    required?: boolean
  }

export const GenderInputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  ...props
}: GenderInputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => (
        <GenderInput
          value={field.value}
          onChange={
            (gender) => field.onChange(gender)
            //form.setValue(name, gender as PathValue<TFieldValues, Path<TFieldValues>>)
          }
          {...props}
        />
      )}
    ></ReactHookFormItem>
  )
}
