export type NonNullableObject<TObject extends Record<string, unknown>> = {
  [Key in keyof TObject]: NonNullable<TObject[Key]>
}

export type NonNullishItemsOnly<TObject extends Record<string, unknown>> = {
  [Key in keyof TObject as TObject[Key] extends Exclude<TObject[Key], null>
    ? Key
    : never]: TObject[Key]
}

export type NonOptionalItemsOnly<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends Exclude<Required<Pick<T, K>>[K], undefined> ? K : never]: T[K]
}
