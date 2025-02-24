import { type FieldValues, type Path } from 'react-hook-form'
import { GenderInput } from '../Inputs/GenderInput'
import { ReactHookFormFieldWrapper } from './ReactHookFormFieldWrapper'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'
import type { Gender } from '@repo/ts-types'

type GenderInputFormItemValuetype = Gender

export type GenderInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  placeholder?: string
  required?: boolean
} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, GenderInputFormItemValuetype>

export const GenderInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
  ...props
}: GenderInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
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
    ></ReactHookFormFieldWrapper>
  )
}
