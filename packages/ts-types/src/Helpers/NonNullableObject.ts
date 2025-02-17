export type NonNullableObject<TObject> = {
  [Key in keyof TObject]: NonNullable<TObject[Key]>
}
