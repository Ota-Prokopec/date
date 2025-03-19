import type { GenericZodObject } from '@repo/ts-types'

export const validator = <TZodSchema extends GenericZodObject>(zodSchema: TZodSchema) => {
  return {
    schema: zodSchema,
  }
}
