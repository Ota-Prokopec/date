import { Column } from '@repo/ui/components/common/Column'
import { cn } from '@repo/ui/dist/lib/utils'
import type { ReactNode } from 'react'
import type { FieldValues } from 'react-hook-form'
import { EditAccountProfileItem } from '../date-forms/EditAccountProfileItem'
import { Form } from './Form'
import type { FormItems, FormItemsTypeSafe, FormWrapperProperties } from './FormTypes'

type FormPaginatorDownProps<TFormFields extends FieldValues, TFormItems extends FormItems> = {
  items: FormItemsTypeSafe<TFormItems>
  index: number
  className?: string
  children?: ReactNode
} & FormWrapperProperties<TFormFields>

export const FormPaginatorDown = <FormFields extends FieldValues, TFormItems extends FormItems>({
  form,
  onSubmit,
  className,
  items,
  index = 1,
  children,
}: FormPaginatorDownProps<FormFields, TFormItems>) => {
  return (
    <Column className={cn('gap-4 w-full', className)}>
      <Form
        items={items}
        onSubmit={onSubmit}
        form={form}
        formField={({ formField, title, description, key }, i) => {
          return (
            <EditAccountProfileItem
              description={index - 1 === i ? description : undefined}
              key={key}
              className=""
              title={title}
            >
              {formField}
            </EditAccountProfileItem>
          )
        }}
      >
        {children}
      </Form>
    </Column>
  )
}
