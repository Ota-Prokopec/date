import { z } from 'zod'

export const socialProfilePlatformZodSchema = z.union([z.literal('instagram'), z.never()])
export type SocialProfilePlatform = z.TypeOf<typeof socialProfilePlatformZodSchema>

const socialProfileDataZodSchema = z.object({
  profileId: z.string(),
  link: z.string(),
})
export type SocialProfileDataParams = z.TypeOf<typeof socialProfileDataZodSchema>

export const socialsDataZodSchema = z.object({
  instagram: socialProfileDataZodSchema,
})
export type SocialsData = z.TypeOf<typeof socialsDataZodSchema>
