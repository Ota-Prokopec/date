import { ReactHookFormItem } from '@repo/ui/components/Forms/ReactHookFormItem'
import type { ReactHookFormExtendingFieldProps } from '@repo/ui/ts-lib/components/Forms/ReactHookFormTypes'
import type { FieldValues } from 'react-hook-form'

export type ProfileSocialsInputFormItemProps<TFieldValues extends FieldValues> =
  ReactHookFormExtendingFieldProps<TFieldValues> & {}

export const ProfileSocialsInputFormItem = <TFieldValues extends FieldValues>({
  form,
  name,
}: ProfileSocialsInputFormItemProps<TFieldValues>) => {
  return (
    <ReactHookFormItem
      form={form}
      name={name}
      render={({ field }) => <ProfileSocialsInputFormItem></ProfileSocialsInputFormItem>}
    ></ReactHookFormItem>
  )
}
