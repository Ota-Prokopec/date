import { z } from 'zod'
import { coordsZodSchema } from '../maps/Coords'
import { genderZodSchema } from './GenderTypes'
import { socialsZodSchema } from './SocialPlatforms'

export const accountZodSchema = z.object({
  username: z.string().nullable().optional(),
  birthDate: z.date().nullable().optional(),
  bio: z.string().nullable().optional(),
  socials: z.union([socialsZodSchema, z.undefined(), z.null()]).nullable().optional(),
  profilePictureURL: z.string().nullable().optional(),
  gender: genderZodSchema.nullable().optional(),
  lookingForGender: genderZodSchema.nullable().optional(),
  userId: z.string(),
  coords: coordsZodSchema.nullable().optional(),
})

export type Account = z.TypeOf<typeof accountZodSchema>
