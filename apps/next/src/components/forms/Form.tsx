import type { FieldValues } from 'react-hook-form'
import type { FormItem, FormItems, FormItemsTypeSafe, FormWrapperProperties } from './FormTypes'
import type { ReactNode } from 'react'
import { ReactHookForm } from '@repo/ui/components/Forms/Form'

type FormProps<TFormFields extends FieldValues, TFormItems extends FormItems> = {
  children?: ReactNode
  items: FormItemsTypeSafe<TFormItems>
  formField: (item: TFormItems[number], index: number) => ReactNode
} & FormWrapperProperties<TFormFields>

export const Form = <TFormFields extends FieldValues, TFormItems extends FormItems>({
  onSubmit,
  form,
  children,
  items,
  formField,
}: FormProps<TFormFields, TFormItems>) => {
  return (
    <ReactHookForm onSubmit={onSubmit} form={form}>
      {items.map((formItem, i) => (
        <div key={formItem.key}>{formField(formItem, i)}</div>
      ))}
      {children}
    </ReactHookForm>
  )
}
