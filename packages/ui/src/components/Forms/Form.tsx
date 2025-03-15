import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'
import { Center } from '../common/Center'
import { Loader } from '../common/Loader'
import { Form, FormControl } from '../shadcn/form'
import type { ReactHookFormExtendingFormProps } from './ReactHookFormTypes'
import { ReactHookFormFieldErrorMessage } from './ReactHookFormFieldErrorMessage'

export type ReactHookFormProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFormProps<TFieldValues> & {
    children: ReactNode
    onSubmit: SubmitHandler<TFieldValues>
  }

export const ReactHookForm = <TFieldValues extends FieldValues>({
  form,
  children,
  onSubmit,
}: ReactHookFormProps<TFieldValues>) => {
  const { isLoading, errors } = form.formState

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn('space-y-8', {
            'opacity-25': isLoading,
          })}
        >
          {children}
        </form>
      </Form>
      {isLoading && (
        <Center className="absolute top-0 left-0 h-full w-full">
          <Loader></Loader>
        </Center>
      )}
    </>
  )
}
