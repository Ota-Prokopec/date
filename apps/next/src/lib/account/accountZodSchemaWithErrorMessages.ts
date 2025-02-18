import { accountDataZodSchemaAllPropsRequired } from '@repo/ts-types'
import { useTranslations } from 'next-intl'

export const useCreateAccountZodSchemaWithErrorMessages = () => {
  const t = useTranslations('components.accountZodSchemaWithErrorMessages')

  return accountDataZodSchemaAllPropsRequired.extend({
    username: accountDataZodSchemaAllPropsRequired.shape.username.min(3, {
      message: t('username'),
    }),
    birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate.refine(
      (date) => !isNaN(date.getTime()),
      {
        message: t('birthDate'),
      }
    ),
    bio: accountDataZodSchemaAllPropsRequired.shape.bio.nonempty({
      message: t('bio'),
    }),
    socials: accountDataZodSchemaAllPropsRequired.shape.socials.refine((val) => val !== undefined, {
      message: t('socials'),
    }),
    profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL.url({
      message: t('profilePictureURL'),
    }),
    gender: accountDataZodSchemaAllPropsRequired.shape.gender.refine(
      (val) => ['male', 'female'].includes(val),
      {
        message: t('gender'),
      }
    ),
    lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: t('lookingForGender') }
    ),
    userId: accountDataZodSchemaAllPropsRequired.shape.userId.nonempty({
      message: t('userId'),
    }),
    coords: accountDataZodSchemaAllPropsRequired.shape.coords.refine(
      (val) => val.lat !== undefined && val.lng !== undefined,
      { message: t('coords') }
    ),
  })
}
