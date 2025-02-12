import { env as environment } from '@repo/env'
import { getClientZodSchema } from '@repo/env/clientZodSchema'

type Schema = ReturnType<typeof getClientZodSchema>

type Envs = Record<keyof Schema, string>

const envs: Envs = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL!,
  NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT: process.env.NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT!,
  NEXT_PUBLIC_PROFILE_PICTURE_WIDTH: process.env.NEXT_PUBLIC_PROFILE_PICTURE_WIDTH!,
  NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL!,
  NEXT_PUBLIC_MAX_LENGTH_OF_USERNAME: process.env.NEXT_PUBLIC_WEB_URL!,
  NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME: process.env.NEXT_PUBLIC_MIN_LENGTH_OF_USERNAME!,
}

export const envClient = environment(envs, 'client')
