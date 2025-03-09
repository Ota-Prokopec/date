import { useEffect } from 'react'
import type { FieldValues, Path } from 'react-hook-form'
import { toast, type ExternalToast } from 'sonner'
import { useFormField } from '../shadcn/form'
import type { ReactHookFormExtendingFieldWrapperProps } from './ReactHookFormTypes'

export type ReactHookFormFieldErrorMessageProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = ReactHookFormExtendingFieldWrapperProps<TFieldValues, TPath> & { options?: ExternalToast }

export const ReactHookFormFieldErrorMessage = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  options,
  name,
  form,
}: ReactHookFormFieldErrorMessageProps<TFieldValues, TPath>) => {
  const { error } = useFormField()

  const onClose = () => form.clearErrors(name)

  useEffect(() => {
    console.log({ error })
  }, [error])

  useEffect(() => {
    let toastMessageId: null | string | number = null
    if (error?.message)
      toastMessageId = toast.error(error?.message.toString(), {
        ...options,
        onAutoClose: onClose,
        onDismiss: onClose,
      })
    return () => {
      toastMessageId ? toast.dismiss(toastMessageId) : null
    }
  }, [error?.message])

  return null
}
