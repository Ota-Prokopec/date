import { z, ZodTypeAny, ZodObject, TypeOf } from 'zod'

type AnyZodObjectType = z.ZodObject<Record<string, ZodTypeAny>>

type ReturnValue<
  TZodSchema extends AnyZodObjectType,
  TItemKeys extends (keyof z.TypeOf<TZodSchema>)[],
> = ZodObject<
  {
    [Key in TItemKeys[number]]: TypeOf<TZodSchema>[Key]
  } & Omit<TypeOf<TZodSchema>, keyof TItemKeys>
>

export const getOptionalZodSchema = <TZodSchema extends AnyZodObjectType>(
  zodObject: TZodSchema,
  itemKeys: (keyof z.TypeOf<TZodSchema>)[]
): ReturnValue<TZodSchema, (keyof z.TypeOf<TZodSchema>)[]> => {
  const optionalObject = Object.entries(zodObject.shape).reduce<typeof zodObject.shape>(
    (acc, currentValue) => {
      const newKey = currentValue[0]
      if (!newKey)
        throw new Error(
          'Key does not exist in the zod schema, there is an invalid zod object schema'
        )
      return {
        ...acc,
        [newKey]: itemKeys.includes(newKey) ? currentValue[1].optional() : currentValue[1],
      }
    },
    {}
  )
  return zodObject.extend(optionalObject) as ReturnValue<TZodSchema, (keyof z.TypeOf<TZodSchema>)[]>
}

export const getNullishZodSchema = <TZodSchema extends z.ZodObject<Record<string, ZodTypeAny>>>(
  zodObject: TZodSchema
) => {
  const optionalObject = Object.entries(zodObject.shape).reduce<typeof zodObject.shape>(
    (acc, currentValue) => {
      const newKey = currentValue[0]
      if (!newKey)
        throw new Error(
          'Key does not exist in the zod schema, there is an invalid zod object schema'
        )
      return { ...acc, [newKey]: currentValue[1].optional() }
    },
    {}
  )
  return zodObject.extend(optionalObject)
}
