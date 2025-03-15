import type { Equal, GenericZodObject } from '@repo/ts-types'
import type { TypeOf } from 'zod'

export class PothosArgsBuilder<TZodSchema extends GenericZodObject> {
  private zodSchema: TZodSchema

  constructor(zodSchema: TZodSchema) {
    this.zodSchema = zodSchema
  }

  parse<TData extends TypeOf<TZodSchema>>(data: TData) {
    return this.zodSchema.parse(data) as Equal<TData, TypeOf<TZodSchema>> extends true
      ? TData
      : never
  }
}
