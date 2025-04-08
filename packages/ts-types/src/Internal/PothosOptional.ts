export type PothosOptional<T extends unknown> = T | null | undefined

export type PothosOptionalObject<TObject extends object> = {
  [Key in keyof TObject]: PothosOptional<TObject[Key]>
}

export type PothosOptionalObjectByKeys<
  TObject extends Record<string, unknown>,
  TKeys extends keyof TObject,
> = {
  [Key in keyof TObject]: Key extends TKeys ? PothosOptional<TObject[Key]> : TObject[Key]
}
