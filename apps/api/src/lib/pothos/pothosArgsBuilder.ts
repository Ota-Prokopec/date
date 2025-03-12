import type { Equal, GenericZodObject } from '@repo/ts-types'
import type { TypeOf } from 'zod'

export class PothosArgsBuilder<
  TData extends TypeOf<GenericZodObject>,
  TZodSchema extends GenericZodObject,
> {
  public zodSchema: TZodSchema

  constructor(zodSchema: TZodSchema) {
    this.zodSchema = zodSchema
  }

  parse(data: TData) {
    return this.zodSchema.parse(data) as Equal<TData, TypeOf<TZodSchema>> extends true
      ? TData
      : never
  }
}
