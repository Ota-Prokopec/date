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

export const fullAccountDataZodSchema = z.object({
  username: accountDataZodSchemaAllPropsRequired.shape.username,
  birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate,
  bio: accountDataZodSchemaAllPropsRequired.shape.bio.nullable().optional(),
  socials: accountDataZodSchemaAllPropsRequired.shape.socials,
  profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL
    .nullable()
    .optional(),
  gender: accountDataZodSchemaAllPropsRequired.shape.gender,
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender,
  userId: accountDataZodSchemaAllPropsRequired.shape.userId,
  coords: accountDataZodSchemaAllPropsRequired.shape.coords.nullable().optional(),
  age: accountDataZodSchemaAllPropsRequired.shape.age,
})

export const getEditAccountDataZodSchemaWithErrorMessages = (
  errorMessages: IntlMessages['others']['accountZodSchemaWithErrorMessages']
) => {
  return z.object({
    username: fullAccountDataZodSchema.shape.username
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
    bio: fullAccountDataZodSchema.shape.bio,
    socials: fullAccountDataZodSchema.shape.socials,
    gender: fullAccountDataZodSchema.shape.gender.refine(
      (val) => ['male', 'female'].includes(val),
      {
        message: errorMessages.gender,
      }
    ),
    lookingForGender: fullAccountDataZodSchema.shape.lookingForGender.refine(
      (val) => ['male', 'female'].includes(val),
      { message: errorMessages.lookingForGender }
    ),
    userId: fullAccountDataZodSchema.shape.userId
      .min(3, {
        message: errorMessages.userId,
      })
      .max(25, { message: errorMessages.userId }),
  })
}

export const accountDataZodSchema = fullAccountDataZodSchema.extend({
  socials: accountDataZodSchemaAllPropsRequired.shape.socials,
  gender: accountDataZodSchemaAllPropsRequired.shape.gender.nullable().optional(),
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender
    .nullable()
    .optional(),
  coords: accountDataZodSchemaAllPropsRequired.shape.coords.nullable().optional(),
  age: accountDataZodSchemaAllPropsRequired.shape.age.nullable().optional(),
})

export type AccountData = TypeOf<typeof accountDataZodSchema>
export type FullAccountData = TypeOf<typeof fullAccountDataZodSchema>
