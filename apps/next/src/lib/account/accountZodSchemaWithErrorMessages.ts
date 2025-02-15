import type { Locale } from '@repo/i18n-next'
import { accountZodSchema as accountZodSchemaTsTypes } from '@repo/ts-types'
import type { z } from 'zod'

const errorMessages: Record<
  Locale,
  Record<keyof z.TypeOf<typeof accountZodSchemaTsTypes>, string>
> = {
  en: {
    username: 'Username must be at least 3 characters long',
    birthDate: 'Invalid birth date',
    bio: 'Bio is required',
    socials: 'Invalid socials',
    profilePictureURL: 'Invalid profile picture URL',
    gender: 'Invalid gender',
    lookingForGender: 'Invalid looking for gender',
    userId: 'User ID is required',
    coords: 'Invalid coordinates',
  },
  cs: {
    username: 'Uživatelské jméno musí mít alespoň 3 znaky',
    birthDate: 'Neplatné datum narození',
    bio: 'Bio je povinné',
    socials: 'Neplatné sociální sítě',
    profilePictureURL: 'Neplatná URL profilového obrázku',
    gender: 'Neplatné pohlaví',
    lookingForGender: 'Neplatné hledané pohlaví',
    userId: 'ID uživatele je povinné',
    coords: 'Neplatné souřadnice',
  },
}
export const getAccountZodSchemaWithErrorMessages = (locale: Locale) =>
  accountZodSchemaTsTypes.extend({
    username: accountZodSchemaTsTypes.shape.username.min(3, {
      message: errorMessages[locale]['username'],
    }),
    birthDate: accountZodSchemaTsTypes.shape.birthDate.refine((date) => !isNaN(date.getTime()), {
      message: errorMessages[locale]['birthDate'],
    }),
    bio: accountZodSchemaTsTypes.shape.bio.nonempty({
      message: errorMessages[locale]['bio'],
    }),
    socials: accountZodSchemaTsTypes.shape.socials.refine((val) => val !== undefined, {
      message: errorMessages[locale]['socials'],
    }),
    profilePictureURL: accountZodSchemaTsTypes.shape.profilePictureURL.url({
      message: errorMessages[locale]['profilePictureURL'],
    }),
    gender: accountZodSchemaTsTypes.shape.gender.refine((val) => ['male', 'female'].includes(val), {
      message: errorMessages[locale]['gender'],
    }),
    lookingForGender: accountZodSchemaTsTypes.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: errorMessages[locale]['lookingForGender'] }
    ),
    userId: accountZodSchemaTsTypes.shape.userId.nonempty({
      message: errorMessages[locale]['userId'],
    }),
    coords: accountZodSchemaTsTypes.shape.coords.refine(
      (val) => val.lat !== undefined && val.lng !== undefined,
      { message: errorMessages[locale]['coords'] }
    ),
  })
