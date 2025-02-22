'use client'

import { useUpdateAccountMutation } from '@/graphql/generated/apollo'
import { useCreateAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { UpdateUserInfoForm, type UpdateUserInfoFormData } from './UpdateUserInfoForm'
import type { AccountData } from '@repo/ts-types'

type UpdateUserInfoProps = {
  currentValues: UpdateUserInfoFormData & {
    profilePictureUrl?: AccountData['profilePictureURL']
  }
}

export const UpdateUserInfo = ({ currentValues }: UpdateUserInfoProps) => {
  // Error Messages - type checking
  const formDataZodSchema = useCreateAccountZodSchemaWithErrorMessages()
    .pick({
      bio: true,
      gender: true,
      lookingForGender: true,
      socials: true,
    } satisfies Record<keyof UpdateUserInfoFormData, boolean>)
    .partial({ bio: true, socials: true })

  // Forms
  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<UpdateUserInfoFormData>({
      defaultValues: currentValues,
      reValidateMode: 'onSubmit',
      resolver: zodResolver(formDataZodSchema),
    })
  const [updateTrigger, updatingState] = useUpdateAccountMutation()

  const onSubmit: SubmitHandler<UpdateUserInfoFormData> = async (data) => {}

  return (
    <UpdateUserInfoForm
      additionalData={currentValues}
      watch={watch}
      setValue={setValue}
      className=""
    ></UpdateUserInfoForm>
  )
}
