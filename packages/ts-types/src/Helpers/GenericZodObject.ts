import type { ZodObject, ZodSchema } from 'zod'

export type GenericZodObject = ZodObject<Record<string, ZodSchema>>
