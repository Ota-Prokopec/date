import {
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  type UseFormStateReturn,
} from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '../shadcn/form'
import type { ReactHookFormExtendingFieldProps } from './ReactHookFormTypes'

export type ReactHookFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {
    render: ({
      field,
      fieldState,
      formState,
    }: {
      field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>
      fieldState: ControllerFieldState
      formState: UseFormStateReturn<TFieldValues>
    }) => React.ReactElement
  }

export const ReactHookFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
  render,
}: ReactHookFormItemProps<TFieldValues>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={(renderProps) => (
        <FormItem>
          <FormControl>{render(renderProps)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
