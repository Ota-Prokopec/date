import { z } from 'zod'
import { parseDatabaseURL } from './parseDatabaseURL'
export const getServerZodSchema = (NODE_ENV: 'test' | 'development') => ({
  DATABASE_URL: z
    .string()
    .url()
    .refine((databaseURL) => {
      const parsedDatabaseURL = parseDatabaseURL(databaseURL)

      if (
        ['test', 'development'].includes(NODE_ENV!) &&
        !parsedDatabaseURL.host?.includes('localhost')
      ) {
        return false
      }

      return true
    }),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  API_URL: z.string().url(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  WEB_URL: z.string(),
  PROD: z.boolean(),
  BETTER_AUTH_SECRET: z.string(),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLODINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
  CLOUDINARY_ROOT_FOLDER_NAME: z.string(),
  BETTER_AUTH_SESSION_TOKEN_NAME: z.string(),
  IMAGE_CDN_PROVIDER_BASE_URL: z.string(),
})
