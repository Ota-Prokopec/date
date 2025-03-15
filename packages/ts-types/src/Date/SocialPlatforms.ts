import { z } from 'zod'

export const socialProfilePlatformZodSchema = z.union([
  z.literal('instagram'),
  z.literal('facebook'),
])
export type SocialProfilePlatform = z.TypeOf<typeof socialProfilePlatformZodSchema>

const socialProfileDataZodSchema = z.object({
  profileId: z.string(),
  link: z.string().url(),
})
export type SocialProfileDataParams = z.TypeOf<typeof socialProfileDataZodSchema>

export const socialsDataZodSchema = z.object({
  instagram: socialProfileDataZodSchema.optional().nullable(),
  facebook: socialProfileDataZodSchema.optional().nullable(),
} satisfies Record<SocialProfilePlatform, unknown>)

export type SocialsData = z.TypeOf<typeof socialsDataZodSchema>
