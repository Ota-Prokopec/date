import { z, TypeOf } from 'zod'
import { coordsZodSchema } from '../maps/Coords'
import { genderZodSchema } from './GenderTypes'
import { socialsDataZodSchema } from './SocialPlatforms'

export const accountDataZodSchemaAllPropsRequired = z.object({
  username: z.string(),
  birthDate: z.date(),
  bio: z.string(),
  socials: socialsDataZodSchema,
  profilePictureURL: z.string(),
  gender: genderZodSchema,
  lookingForGender: genderZodSchema,
  userId: z.string(),
  coords: coordsZodSchema,
  age: z.number(),
})

export const getAccountDataZodSchemaWithErrorMessages = (
  errorMessages: IntlMessages['others']['accountZodSchemaWithErrorMessages']
) => {
  return z.object({
    username: accountDataZodSchemaAllPropsRequired.shape.username
      .min(3, {
        message: errorMessages.username,
      })
      .max(40, { message: errorMessages.username })
      .nonempty({ message: errorMessages['fillAllRequiredFields'] }),
    birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate.refine(
      (date) => !isNaN(date.getTime()),
      {
        message: errorMessages.birthDate,
      }
    ),
    bio: accountDataZodSchemaAllPropsRequired.shape.bio
      .nonempty({
        message: errorMessages.bio,
      })
      .nonempty({ message: errorMessages['fillAllRequiredFields'] }),
    socials: accountDataZodSchemaAllPropsRequired.shape.socials.refine((val) => val !== undefined, {
      message: errorMessages.socials,
    }),
    profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL
      .url({
        message: errorMessages.profilePictureURL,
      })
      .nonempty({ message: errorMessages['fillAllRequiredFields'] }),
    gender: accountDataZodSchemaAllPropsRequired.shape.gender.refine(
      (val) => ['male', 'female'].includes(val),
      {
        message: errorMessages.gender,
      }
    ),
    lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: errorMessages.lookingForGender }
    ),
    userId: accountDataZodSchemaAllPropsRequired.shape.userId
      .min(3, {
        message: errorMessages.userId,
      })
      .max(25, { message: errorMessages.userId }),
    coords: accountDataZodSchemaAllPropsRequired.shape.coords.refine(
      (val) => val.lat !== undefined && val.lng !== undefined,
      { message: errorMessages.coords }
    ),
  })
}

export const accountDataZodSchema = accountDataZodSchemaAllPropsRequired.extend({
  username: accountDataZodSchemaAllPropsRequired.shape.username,
  birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate.nullable().optional(),
  bio: accountDataZodSchemaAllPropsRequired.shape.bio.nullable().optional(),
  socials: accountDataZodSchemaAllPropsRequired.shape.socials.nullable().optional(),
  profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL
    .nullable()
    .optional(),
  gender: accountDataZodSchemaAllPropsRequired.shape.gender.nullable().optional(),
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender
    .nullable()
    .optional(),
  userId: accountDataZodSchemaAllPropsRequired.shape.userId,
  coords: accountDataZodSchemaAllPropsRequired.shape.coords.nullable().optional(),
  age: accountDataZodSchemaAllPropsRequired.shape.age.nullable().optional(),
})

export const fullAccountDataZodSchema = z.object({
  username: accountDataZodSchemaAllPropsRequired.shape.username,
  birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate,
  bio: accountDataZodSchemaAllPropsRequired.shape.bio.nullable().optional(),
  socials: accountDataZodSchemaAllPropsRequired.shape.socials.nullable().optional(),
  profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL
    .nullable()
    .optional(),
  gender: accountDataZodSchemaAllPropsRequired.shape.gender,
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender
    .nullable()
    .optional(),
  userId: accountDataZodSchemaAllPropsRequired.shape.userId,
  coords: accountDataZodSchemaAllPropsRequired.shape.coords,
  age: accountDataZodSchemaAllPropsRequired.shape.age,
})

export type AccountData = TypeOf<typeof accountDataZodSchema>
export type FullAccountData = TypeOf<typeof fullAccountDataZodSchema>
