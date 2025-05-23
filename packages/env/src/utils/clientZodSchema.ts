import { string, z } from 'zod'
export const getClientZodSchema = () => {
  return {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_WEB_URL: string().url(),
    NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT: z.number(),
    NEXT_PUBLIC_PROFILE_PICTURE_WIDTH: z.number(),
    NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME: z.number(),
    NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME: z.number(),
  }
}
