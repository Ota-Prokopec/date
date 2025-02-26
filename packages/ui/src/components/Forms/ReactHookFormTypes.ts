import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
  UseFormStateReturn,
} from 'react-hook-form'

export type ReactHookFormExtendingFieldProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
  TFieldType extends unknown,
> = {
  form: PathValue<TFieldValues, TPath> extends TFieldType
    ? TFieldType extends PathValue<TFieldValues, TPath>
      ? UseFormReturn<TFieldValues, unknown, undefined>
      : never
    : never
  name: TPath
}

export type ReactHookFormExtendingFormProps<TFieldValues extends FieldValues> = {
  form: UseFormReturn<TFieldValues, unknown, undefined>
}

export type ReactHookFormExtendingFieldWrapperProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {
  form: UseFormReturn<TFieldValues, unknown, undefined>
  name: TPath
}

export type ReactHookFormRenderFunction<TFieldValues extends FieldValues> = ({
  field,
  fieldState,
  formState,
}: {
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<TFieldValues>
}) => React.ReactElement
