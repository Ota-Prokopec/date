import { z } from 'zod'
import { coordsZodSchema } from '../maps/Coords'
import { genderZodSchema } from './GenderTypes'
import { socialsZodSchema } from './SocialPlatforms'

export const accountZodSchema = z.object({
  username: z.string(),
  birthDate: z.date(),
  bio: z.string(),
  socials: z.union([socialsZodSchema, z.undefined(), z.null()]),
  profilePictureURL: z.string(),
  gender: genderZodSchema,
  lookingForGender: genderZodSchema,
  userId: z.string(),
  coords: coordsZodSchema,
})

export type Account = z.TypeOf<typeof accountZodSchema>
