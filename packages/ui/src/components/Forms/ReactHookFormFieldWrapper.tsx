import { type FieldValues, type Path } from 'react-hook-form'
import { FormControl, FormField, FormItem } from '../shadcn/form'
import { ReactHookFormFieldErrorMessage } from './ReactHookFormFieldErrorMessage'
import type {
  ReactHookFormExtendingFieldWrapperProps,
  ReactHookFormRenderFunction,
} from './ReactHookFormTypes'

export type ReactHookFormFieldWrapperProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = ReactHookFormExtendingFieldWrapperProps<TFieldValues, TPath> & {
  render: ReactHookFormRenderFunction<TFieldValues>
}

export const ReactHookFormFieldWrapper = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
  render,
}: ReactHookFormFieldWrapperProps<TFieldValues, TPath>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={(renderProps) => (
        <FormItem>
          <FormControl>{render(renderProps)}</FormControl>
        </FormItem>
      )}
    />
  )
}
