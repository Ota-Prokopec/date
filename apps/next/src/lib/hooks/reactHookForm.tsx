import { ReactHookForm } from '@repo/ui/components/Forms/Form'
import type {
  ReactHookFormExtendingFieldWrapperProps,
  ReactHookFormExtendingFormProps,
} from '@repo/ui/ts-lib/components/Forms/ReactHookFormTypes'
import { createElement, type ReactNode } from 'react'
import { useForm, type FieldValues, type Path, type SubmitHandler } from 'react-hook-form'

type MyFormItem<TName extends string> = {
  wrapper: ReactNode
  element: ReactNode
}

type MyFormProps<
  TFieldValues extends FieldValues,
  TForm extends ReactHookFormExtendingFormProps<TFieldValues>['form'],
> = {
  items: MyFormItem<
    ReactHookFormExtendingFieldWrapperProps<TFieldValues, Path<TFieldValues>>['name']
  >[]
  onSubmit: SubmitHandler<TFieldValues>
  form: TForm
}

export const MyForm = <
  TFieldValues extends FieldValues,
  TForm extends ReactHookFormExtendingFormProps<TFieldValues>['form'],
>({
  items,
  onSubmit,
  form,
}: MyFormProps<TFieldValues, TForm>) => {
  return (
    <ReactHookForm<TFieldValues> form={form} onSubmit={onSubmit}>
      {items.map(({ wrapper, element }) => createElement(() => wrapper, {}, element))}
    </ReactHookForm>
  )
}

const useTest = () => {
  const testForm = useForm<{ a: string }>()
  const form = MyForm({
    form: testForm,
    items: [{ element: <div></div>, wrapper: <div></div> }],
    onSubmit: () => {},
  })
}
