import { z, type TypeOf } from 'zod'
import { accountDataZodSchemaAllPropsRequired } from './Account'

export const userProfileDataZodSchema = z.object({
  username: accountDataZodSchemaAllPropsRequired.shape.username,
  userId: accountDataZodSchemaAllPropsRequired.shape.userId,
  socials: accountDataZodSchemaAllPropsRequired.shape.socials,
  profilePictureURL: accountDataZodSchemaAllPropsRequired.shape.profilePictureURL,
  gender: accountDataZodSchemaAllPropsRequired.shape.gender,
  lookingForGender: accountDataZodSchemaAllPropsRequired.shape.lookingForGender,
  age: z.number(), // Add the age property
  bio: accountDataZodSchemaAllPropsRequired.shape.bio.optional().nullable(), // Add the bio property
})

export type UserProfileData = TypeOf<typeof userProfileDataZodSchema>
