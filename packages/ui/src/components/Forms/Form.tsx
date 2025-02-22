import type { FieldValues, SubmitHandler } from 'react-hook-form'
import type { ReactHookFormExtendingProps } from './ReactHookFormTypes'
import { Form } from '../shadcn/form'
import type { ReactNode } from 'react'

export type ReactHookFormProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingProps<TFieldValues> & {
    children: ReactNode
    onSubmit: SubmitHandler<TFieldValues>
  }

export const ReactHookForm = <TFieldValues extends FieldValues>({
  form,
  children,
  onSubmit,
}: ReactHookFormProps<TFieldValues>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {children}
      </form>
    </Form>
  )
}
