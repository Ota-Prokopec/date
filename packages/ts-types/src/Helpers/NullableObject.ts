export type NullableObject<TObject extends Record<string, unknown>> = {
  [Key in keyof TObject]: TObject[Key] | null
}

export type NullableObjectDeep<TObject extends object> = {
  [Key in keyof TObject]: TObject[Key] extends object
    ? NullableObjectDeep<TObject[Key]> | null
    : TObject[Key] | null
}

export type NullableObjectByKeys<
  TObject extends Record<string, unknown>,
  TKeys extends keyof TObject,
> = {
  [Key in keyof TObject]: Key extends TKeys ? TObject[Key] | null : TObject[Key]
}
