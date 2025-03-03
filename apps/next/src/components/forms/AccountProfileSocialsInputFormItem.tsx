import { ReactHookFormFieldWrapper } from '@repo/ui/components/Forms/ReactHookFormFieldWrapper'
import type { ReactHookFormExtendingFieldProps } from '@repo/ui/ts-lib/components/Forms/ReactHookFormTypes'
import type { FieldValues, Path } from 'react-hook-form'
import { ProfileSocialsInput } from '../Inputs/ProfileSocialsInput'
import type { SocialsData } from '@repo/ts-types'

type UserNameInputFormItemValuetype = SocialsData

export type AccountProfileSocialsInputFormItemProps<
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
> = {} & ReactHookFormExtendingFieldProps<TFieldValues, TPath, UserNameInputFormItemValuetype>

export const AccountProfileSocialsInputFormItem = <
  TFieldValues extends FieldValues,
  TPath extends Path<TFieldValues>,
>({
  form,
  name,
}: AccountProfileSocialsInputFormItemProps<TFieldValues, TPath>) => {
  return (
    <ReactHookFormFieldWrapper
      form={form}
      name={name}
      render={({ field }) => (
        <ProfileSocialsInput
          value={field.value}
          onChange={(value) => field.onChange(value)}
        ></ProfileSocialsInput>
      )}
    ></ReactHookFormFieldWrapper>
  )
}
