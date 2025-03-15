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

export const accountDataZodSchema = z.object({
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

export const incompleteAccountDataZodSchema = accountDataZodSchema.extend({
  socials: accountDataZodSchemaAllPropsRequired.shape.socials,
  gender: accountDataZodSchemaAllPropsRequired.shape.gender.nullable().optional(),
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender
    .nullable()
    .optional(),
  coords: accountDataZodSchemaAllPropsRequired.shape.coords.nullable().optional(),
  age: accountDataZodSchemaAllPropsRequired.shape.age.nullable().optional(),
  birthDate: accountDataZodSchemaAllPropsRequired.shape.birthDate.nullable().optional(),
})

export type IncompleteAccountData = TypeOf<typeof incompleteAccountDataZodSchema>
export type AccountData = TypeOf<typeof accountDataZodSchema>
