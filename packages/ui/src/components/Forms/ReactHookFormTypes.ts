import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'

export type ReactHookFormExtendingProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues, unknown, undefined>
}

export type ReactHookFormExtendingFieldProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues, unknown, undefined>
  name: Path<TFieldValues>
}
