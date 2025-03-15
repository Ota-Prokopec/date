import { z, type SomeZodObject, type TypeOf, ZodNullable, ZodOptional, type ZodObject } from 'zod'

export const zodNullishProperties = <
  TZodSchema extends SomeZodObject,
  TNullishProperties extends Partial<Record<keyof TypeOf<TZodSchema>, true>>,
>(
  zodSchema: TZodSchema,
  nullishProperties: TNullishProperties
) => {
  type Shape = TZodSchema['shape']

  return zodSchema.extend(
    Object.keys(nullishProperties).reduce(
      (acc, currentKey) => ({
        ...acc,
        [currentKey]: nullishProperties[currentKey]
          ? //? It is always there - if i itterate over it => so i can use ! to overcome the typescript check
            zodSchema.shape[currentKey]!.nullish()
          : zodSchema.shape[currentKey],
      }),
      {}
    )
  ) as ZodObject<{
    [Key in keyof Shape]: Key extends keyof TNullishProperties
      ? ZodOptional<ZodNullable<Shape[Key]>>
      : Shape[Key]
  }>
}
