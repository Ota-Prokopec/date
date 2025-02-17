'use client'

import { NewUserForm, type FormData } from '@/components/forms/NewUserForm'
import { BasicButton } from '@/components/Inputs/BasicButton'
import { useSaveNewUserInformationMutation } from '@/graphql/generated/apollo'
import { useAccountZodSchemaWithErrorMessages } from '@/lib/account/accountZodSchemaWithErrorMessages'
import { zodResolver } from '@hookform/resolvers/zod'
import { cookieStorage } from '@repo/cookies'
import { Center } from '@repo/ui/components/common/Center'
import { useSuperEffect } from '@repo/ui/ts-lib/hooks/useSuperEffect'
import { getObjectKeys } from '@repo/utils/common/object'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

const NewUserPage = () => {
  const [locale, setLocale] = cookieStorage.useStorageValue('locale')
  const t = useTranslations('pages.auth-newuser')
  const router = useRouter()
  const formDataZodSchema = useAccountZodSchemaWithErrorMessages().pick({
    username: true,
    gender: true,
    lookingForGender: true,
    birthDate: true,
  })

  // Forms
  const { register, handleSubmit, watch, formState, control, setValue, getValues } =
    useForm<FormData>({
      defaultValues: { gender: 'male', lookingForGender: 'female', birthDate: new Date() },
      reValidateMode: 'onSubmit',
      resolver: zodResolver(formDataZodSchema),
    })
  const [updateInfo, updateInfoState] = useSaveNewUserInformationMutation()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await updateInfo({ variables: data })
    router.push('/')
  }

  // errors toast
  useEffect(() => {
    const itemsTypeErrorKeys = getObjectKeys(formState.errors)
    itemsTypeErrorKeys.map((key) => {
      const message = formState.errors[key]?.message
      toast.warning(message === 'Required' ? t('fillAllRequiredFields') : message, {
        dismissible: true,
      })
    })
  }, [formState.errors])

  useSuperEffect(
    () => {
      toast.error(t('errorMessage'), { dismissible: true })
    },
    [updateInfoState.error],
    { mountedOnly: true }
  )

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Center className="w-full p-4 flex-col gap-10">
        <NewUserForm className="max-w-[400px]" watch={watch} setValue={setValue}></NewUserForm>

        <BasicButton
          isLoading={updateInfoState.loading}
          className="gap-2"
          icon={<ChevronRight strokeWidth={2.5} className="w-8 h-8"></ChevronRight>}
          type="submit"
        >
          {t('continueButtonLabel')}
        </BasicButton>
      </Center>
    </form>
  )
}

export default NewUserPage
