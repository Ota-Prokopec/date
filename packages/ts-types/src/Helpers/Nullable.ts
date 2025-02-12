export type Nullable<TObject extends Record<string, unknown>> = {
  [Key in keyof TObject]: TObject[Key] | null
}
