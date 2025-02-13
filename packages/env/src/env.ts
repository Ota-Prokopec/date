import { createEnv } from '@t3-oss/env-nextjs'
import { getClientZodSchema } from './utils/clientZodSchema'
import { getServerZodSchema } from './utils/serverZodSchema'
import { z } from 'zod'

type EnvSource = NodeJS.ProcessEnv | ImportMetaEnv | Record<string, string>
type Environment = 'client' | 'server'

type ZodToTypeDefinition<TZod extends Record<string, any>> = {
  [Key in keyof TZod]: z.TypeOf<TZod[Key]>
}

type Output<TEnvType extends Environment> = TEnvType extends 'client'
  ? ZodToTypeDefinition<ReturnType<typeof getClientZodSchema>>
  : TEnvType extends 'server'
    ? ZodToTypeDefinition<ReturnType<typeof getServerZodSchema>>
    : never

export const env = <TEnvType extends Environment>(
  envSource: EnvSource,
  environment: TEnvType
): Output<TEnvType> => {
  const server =
    environment === 'server'
      ? createEnv({
          isServer: true,
          server: getServerZodSchema(envSource['NODE_ENV']),
          runtimeEnv: {
            DATABASE_URL: envSource.DATABASE_URL,
            NODE_ENV: envSource.NODE_ENV,
            GOOGLE_CLIENT_ID: envSource.GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET: envSource.GOOGLE_CLIENT_SECRET,
            API_URL: envSource.API_URL,
            PROD: !!envSource.PROD,
            WEB_URL: envSource.WEB_URL,
            DISCORD_CLIENT_SECRET: envSource.DISCORD_CLIENT_SECRET,
            DISCORD_CLIENT_ID: envSource.DISCORD_CLIENT_ID,
            BETTER_AUTH_SECRET: envSource.BETTER_AUTH_SECRET,
            CLOUDINARY_CLOUD_NAME: envSource.CLOUDINARY_CLOUD_NAME,
            CLODINARY_API_KEY: envSource.CLODINARY_API_KEY,
            CLOUDINARY_API_SECRET: envSource.CLOUDINARY_API_SECRET,
            CLOUDINARY_ROOT_FOLDER_NAME: envSource.CLOUDINARY_ROOT_FOLDER_NAME,
          },
          //skipValidation: !!envSource.NEXT_PUBLIC_SKIP_ENV_VALIDATION,
        })
      : null
  const client =
    environment === 'client'
      ? createEnv({
          isServer: false,
          client: getClientZodSchema(),
          runtimeEnv: {
            NEXT_PUBLIC_API_URL: envSource.NEXT_PUBLIC_API_URL,
            NEXT_PUBLIC_WEB_URL: envSource.NEXT_PUBLIC_WEB_URL,
            NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME: parseInt(
              envSource.NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME
            ),
            NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME: parseInt(
              envSource.NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME
            ),

            NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT: parseInt(
              envSource.NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT
            ),
            NEXT_PUBLIC_PROFILE_PICTURE_WIDTH: parseInt(
              envSource.NEXT_PUBLIC_PROFILE_PICTURE_WIDTH
            ),
          },
          // skipValidation: !!envSource.NEXT_PUBLIC_SKIP_ENV_VALIDATION,
        })
      : null
  return (environment === 'client' ? client : server) as Output<TEnvType>
}
