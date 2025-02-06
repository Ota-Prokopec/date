import { string, z } from 'zod';
export const getClientZodSchema = () => {
  return {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_MAP_API_KEY: z.string(),
    NEXT_PUBLIC_WEB_URL: string().url(),
    NEXT_PUBLIC_PICTURE_ASPECT_RATIO: z.number(),
    NEXT_PUBLIC_PICTURE_HEIGHT: z.number(),
    NEXT_PUBLIC_PICTURE_WIDTH: z.number(),
  };
};
