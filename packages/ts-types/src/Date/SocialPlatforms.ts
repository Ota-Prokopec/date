import { z } from 'zod';

export const socialProfilePlatformZodSchema = z.union([z.literal('instagram'), z.never()]);
export type SocialProfilePlatform = z.TypeOf<typeof socialProfilePlatformZodSchema>;

export const socialProfileDataZodSchema = z.object({
  profileId: z.string(),
  link: z.string(),
});
export type SocialProfileData = z.TypeOf<typeof socialProfileDataZodSchema>;

export const socialsZodSchema = z.object({
  instagram: socialProfileDataZodSchema,
});
export type Socials = z.TypeOf<typeof socialsZodSchema>;
