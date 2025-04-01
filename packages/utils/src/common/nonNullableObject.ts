import type { NonNullableObject, NonNullableObjectByKeys } from '@repo/ts-types'

const isNullable = <TValue extends unknown>(value: TValue) => {
  return value === null || value === undefined
}

export const checkNonNullablePropertiesInObject = <
  TObject extends Record<string, unknown>,
  TNonNullableKeys extends (keyof TObject)[],
>(
  object: TObject,
  nonNullableKeys: TNonNullableKeys
): NonNullableObjectByKeys<TObject, TNonNullableKeys[number]> => {
  nonNullableKeys.map((key) => {
    if (isNullable(object[key]))
      throw new TypeError(`Object property ${key.toString()} is nullable`)
    return [key, object[key]] as const
  })

  return object as NonNullableObjectByKeys<TObject, TNonNullableKeys[number]>
}
