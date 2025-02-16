import { accountZodSchema as accountZodSchemaTsTypes } from '@repo/ts-types'
import { useTranslations } from 'next-intl'

export const useAccountZodSchemaWithErrorMessages = () => {
  const t = useTranslations('components.accountZodSchemaWithErrorMessages')

  return accountZodSchemaTsTypes.extend({
    username: accountZodSchemaTsTypes.shape.username.min(3, {
      message: t('username'),
    }),
    birthDate: accountZodSchemaTsTypes.shape.birthDate.refine((date) => !isNaN(date.getTime()), {
      message: t('birthDate'),
    }),
    bio: accountZodSchemaTsTypes.shape.bio.nonempty({
      message: t('bio'),
    }),
    socials: accountZodSchemaTsTypes.shape.socials.refine((val) => val !== undefined, {
      message: t('socials'),
    }),
    profilePictureURL: accountZodSchemaTsTypes.shape.profilePictureURL.url({
      message: t('profilePictureURL'),
    }),
    gender: accountZodSchemaTsTypes.shape.gender.refine((val) => ['male', 'female'].includes(val), {
      message: t('gender'),
    }),
    lookingForGender: accountZodSchemaTsTypes.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: t('lookingForGender') }
    ),
    userId: accountZodSchemaTsTypes.shape.userId.nonempty({
      message: t('userId'),
    }),
    coords: accountZodSchemaTsTypes.shape.coords.refine(
      (val) => val.lat !== undefined && val.lng !== undefined,
      { message: t('coords') }
    ),
  })
}
